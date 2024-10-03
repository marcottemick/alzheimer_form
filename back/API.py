from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import joblib
import pandas as pd
import os

app = FastAPI()

class HealthData(BaseModel):
    FirstName: List[str]
    Name: List[str]
    Age: List[str]
    Gender: List[str]
    Ethnicity: List[str]
    EducationLevel: List[str]
    BMI: List[str]
    Smoking: List[str]
    AlcoholConsumption: List[str]
    PhysicalActivity: List[str]
    DietQuality: List[str]
    SleepQuality: List[str]
    FamilyHistoryAlzheimers: List[str]
    CardiovascularDisease: List[str]
    Diabetes: List[str]
    Depression: List[str]
    HeadInjury: List[str]
    Hypertension: List[str]
    SystolicBP: List[str]
    DiastolicBP: List[str]
    CholesterolTotal: List[str]
    CholesterolLDL: List[str]
    CholesterolHDL: List[str]
    CholesterolTriglycerides: List[str]
    MMSE: List[str]
    FunctionalAssessment: List[str]
    MemoryComplaints: List[str]
    BehavioralProblems: List[str]
    ADL: List[str]
    Confusion: List[str]
    Disorientation: List[str]
    PersonalityChanges: List[str]
    DifficultyCompletingTasks: List[str]
    Forgetfulness: List[str]

class PredictionResponse(BaseModel):
    predict: int  # Liste des prédictions
    confidence: "float"    # Pourcentage de confiance

dtypes = {
    "FirstName": "str",
    "Name": "str",
    "Age": "int",
    "Gender": "int",
    "Ethnicity": "int",
    "EducationLevel": "int",
    "BMI": "float",
    "Smoking": "int",
    "AlcoholConsumption": "float",
    "PhysicalActivity": "float",
    "DietQuality": "float",
    "SleepQuality": "float",
    "FamilyHistoryAlzheimers": "int",
    "CardiovascularDisease": "int",
    "Diabetes": "int",
    "Depression": "int",
    "HeadInjury": "int",
    "Hypertension": "int",
    "SystolicBP": "int",
    "DiastolicBP": "int",
    "CholesterolTotal": "float",
    "CholesterolLDL": "float",
    "CholesterolHDL": "float",
    "CholesterolTriglycerides": "float",
    "MMSE": "float",
    "FunctionalAssessment": "float",
    "MemoryComplaints": "int",
    "BehavioralProblems": "int",
    "ADL": "float",
    "Confusion": "int",
    "Disorientation": "int",
    "PersonalityChanges": "int",
    "DifficultyCompletingTasks": "int",
    "Forgetfulness": "int",
}

@app.get("/connexion")
def get_connexion():
    return {"response": True}

@app.post("/predict", response_model=PredictionResponse)
def put_form(form: HealthData):
    global dtypes
    base_dir = os.path.dirname(os.path.abspath(__file__))
    road_model = os.path.join(base_dir, 'decision_tree.joblib')
    loaded_model = joblib.load(road_model)
    df_form = pd.DataFrame(data=form.dict())
    df_form = df_form.astype(dtypes)
    df_form = df_form.drop(columns=["FirstName", "Name"])

    y_new_pred = loaded_model.predict_proba(df_form)
    confidence_scores = y_new_pred.max(axis=1)

    response = {
        'predict': y_new_pred[0].argmax(), # Indice de la classe prédite
        'confidence': round(confidence_scores[0] * 100, 2) # Score de confiance pour la première prédiction
    }

    return response

# code pour lancer l'API : uvicorn API:app --reload