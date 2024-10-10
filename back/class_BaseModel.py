from pydantic import BaseModel
from typing import List

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

class PredictionResponse(BaseModel):
    Predict: int
    Confidence: float
    Patient: dict
    Form: dict
    Response: bool

class StandardResponse(BaseModel):
    response: bool
