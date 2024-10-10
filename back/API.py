from fastapi import FastAPI
from class_BaseModel import PredictionResponse, HealthData, StandardResponse, dtypes
import joblib
import pandas as pd
import os
from pymongo import MongoClient
import json
from bson import json_util
from dotenv import load_dotenv
from datetime import datetime

current_os = os.name
if current_os == "nt":
    load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

# Récupérer les informations de connexion à partir des variables d'environnement
MONGO_USERNAME = os.getenv("MONGO_USERNAME")
MONGO_PASSWORD = os.getenv("MONGO_PASSWORD")
MONGO_HOST = os.getenv("MONGO_HOST")
MONGO_PORT = os.getenv("MONGO_PORT")
MONGO_DB = os.getenv("MONGO_DB")
MONGO_COL = os.getenv("MONGO_COL")

# connection à la base de donnée en mongoDB
CONNECTION_STRING = "mongodb://{}:{}@{}:{}/".format(MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT)
client = MongoClient(CONNECTION_STRING)
db = client[MONGO_DB]
collection = db[MONGO_COL]

app = FastAPI()

@app.get("/connexion", response_model=StandardResponse)
def get_connexion():
    try:
        return {"response": True}
    except Exception as e:
        print(e)
        response = {"response": False}
        return response

@app.post("/predict", response_model=PredictionResponse)
def get_predict(form: HealthData):
    try:
        global dtypes
        base_dir = os.path.dirname(os.path.abspath(__file__))
        road_model = os.path.join(base_dir, 'decision_tree.joblib')
        loaded_model = joblib.load(road_model)
        df_form = pd.DataFrame(data=form.dict())
        df_form = df_form.astype(dtypes)
        df_patient = df_form[['FirstName', 'Name']]
        df_form = df_form.drop(columns=["FirstName", "Name"])

        y_new_pred = loaded_model.predict_proba(df_form)
        confidence_scores = y_new_pred.max(axis=1)

        response = {
            "Response": True,
            "Predict": int(y_new_pred[0].argmax()),
            "Confidence": round(confidence_scores[0] * 100, 2),
            "Patient": df_patient.to_dict(orient = "records")[0],
            "Form": df_form.to_dict(orient= "records")[0]
        }   

        return response
    except Exception as e:
        print(e)
        response = {
            "Response": False,
            "Predict": 0,
            "Confidence": 0,
            "Patient": {},
            "Form": {}
        }
        return response


@app.post("/predict_db", response_model=StandardResponse)
def put_db(predict: PredictionResponse):
    try:
        response_dict = predict.dict()
        del response_dict['Response']
        response_dict['date'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        json_data_predict = json.loads(json.dumps(response_dict, default=json_util.default))
        collection.insert_one(json_data_predict)

        response = {"response": True}
        return response
    except Exception as e:
        print(e)
        response = {"response": False}
        return response

# code pour lancer l'API : uvicorn API:app --reload