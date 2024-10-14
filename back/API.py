from fastapi import FastAPI
from class_BaseModel import *
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
MONGO_USERNAME = os.getenv("MONGO_USERNAME", "test")
MONGO_PASSWORD = os.getenv("MONGO_PASSWORD", "test")
MONGO_HOST = os.getenv("MONGO_HOST", "localhost")
MONGO_PORT = os.getenv("MONGO_PORT", "4000")
MONGO_DB = os.getenv("MONGO_DB", "db_test")


# connection à la base de donnée en mongoDB
CONNECTION_STRING = "mongodb://{}:{}@{}:{}/".format(MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT)
client = MongoClient(CONNECTION_STRING)
db = client[MONGO_DB]

app = FastAPI()


@app.get("/connexion", response_model=StandardResponse)
def get_connexion():
    """
    Connection entre le back et le front
    """
    try:
        return {"response": True}
    except Exception as e:
        print(e)
        response = {"response": False}
        return response

@app.post("/predict", response_model=PredictionResponse)
def get_predict(form: HealthData):
    """
    Envoie de la prédiction au formulaire
    """
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
    """
    stockage en bdd du formulaire et de la prédiction
    """
    try:
        response_dict = predict.dict()
        # supprime la réponse du serveur
        del response_dict["Response"]

        patient = {"patient": response_dict["Patient"]["Name"] + " " + response_dict["Patient"]["FirstName"]}
        # ajoute la date au formulaire
        response_dict["Form"]["Date"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        response_dict["Form"]["Patient"] = patient["patient"]
        response_dict["Form"]["Predict"] = response_dict["Predict"]
        response_dict["Form"]["Confidence"] = response_dict["Confidence"]

        json_data_patients = json.loads(json.dumps(patient, default=json_util.default))
        collection_patients = db["patients"]
        # remplace ou ajoute un nouveau patient
        patient_in_db = collection_patients.find_one_and_replace(json_data_patients, json_data_patients, return_document=False)
        if patient_in_db is None:
            collection_patients.insert_one(json_data_patients)
        # ajoute un nouveau formulaire avec la date de réalisation
        json_data_form = json.loads(json.dumps(response_dict["Form"], default=json_util.default))
        collection_form = db["forms"]
        collection_form.insert_one(json_data_form)

        response = {"response": True}
        return response
    except Exception as e:
        print(e)
        response = {"response": False}
        return response
    
@app.get("/patients", response_model=PatientsList)
def get_patients():
    """
    Envoie la liste des patients présents en base de données
    """
    try:
        collection_patients = db["patients"]
        patients_list = list(collection_patients.find({}, {"_id":0}))

        response = {
            "response": True,
            "patients": json_util.loads(json_util.dumps(patients_list))}
        return response
    
    except Exception as e:
        print(e)
        response = {"response": False}
        return response
    
@app.post("/patient_data", response_model= PatientData)
def get_patient_data(Patient: PatientName):
    """
    Envoie les données du formulaire et la prédiction d'un patient
    """
    try:
        print(Patient)
        collection_form = db["forms"]
        patient_data = collection_form.find(Patient.dict(), {"_id": 0})

        response = {
            "response": True,
            "patientData": json_util.loads(json_util.dumps(patient_data))}
        return response
        
    except Exception as e:
        print(e)
        response = {"response": False}
        return response


# code pour lancer l'API : uvicorn API:app --reload