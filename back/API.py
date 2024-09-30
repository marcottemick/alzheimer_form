from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import joblib
import pandas as pd
import os

app = FastAPI()

class HealthData(BaseModel):
    Age: List[int]
    Gender: List[int]
    Ethnicity: List[int]
    EducationLevel: List[int]
    BMI: List[float]
    Smoking: List[int]
    AlcoholConsumption: List[float]
    PhysicalActivity: List[float]
    DietQuality: List[float]
    SleepQuality: List[float]
    FamilyHistoryAlzheimers: List[int]
    CardiovascularDisease: List[int]
    Diabetes: List[int]
    Depression: List[int]
    HeadInjury: List[int]
    Hypertension: List[int]
    SystolicBP: List[int]
    DiastolicBP: List[int]
    CholesterolTotal: List[float]
    CholesterolLDL: List[float]
    CholesterolHDL: List[float]
    CholesterolTriglycerides: List[float]
    MMSE: List[float]
    FunctionalAssessment: List[float]
    MemoryComplaints: List[int]
    BehavioralProblems: List[int]
    ADL: List[float]
    Confusion: List[int]
    Disorientation: List[int]
    PersonalityChanges: List[int]
    DifficultyCompletingTasks: List[int]
    Forgetfulness: List[int]

class PredictionResponse(BaseModel):
    predict: int  # Liste des prédictions
    confidence: float    # Pourcentage de confiance

@app.get("/")
def get_connexion():
    return {"response": True}

@app.post("/predict", response_model=PredictionResponse)
def put_form(form: HealthData):
    sep = '//' if os.name == 'nt' else '/'
    project_path = os.getcwd()  + sep
    print(project_path)
    road_model = project_path + "decision_tree.joblib"
    loaded_model = joblib.load(road_model)
    df_form = pd.DataFrame(data=form.dict())

    y_new_pred = loaded_model.predict_proba(df_form)
    confidence_scores = y_new_pred.max(axis=1)

    response = {
        'predict': y_new_pred[0].argmax(),  # Indice de la classe prédite
        'confidence': confidence_scores[0]   # Score de confiance pour la première prédiction
    }

    return response