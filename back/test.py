import unittest
import json
from fastapi.testclient import TestClient
from API import app  # Ton application FastAPI

# Crée une instance de TestClient
client = TestClient(app)

class AppTests(unittest.TestCase):
    def setUp(self):
        self.client = client
        self.maxDiff = None

    def test_connexion(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        data = response.json()

        self.assertEqual(data['response'], True)

    def test_predict(self):
        data = {"Age": [76], "Gender": [1], "Ethnicity": [2], "EducationLevel": [0], "BMI": [33.8293639108859], "Smoking": [0], "AlcoholConsumption": [19.82631309137609], "PhysicalActivity": [9.399462708710182], "DietQuality": [4.794106212456812], "SleepQuality": [4.976045740143789], "FamilyHistoryAlzheimers": [0], "CardiovascularDisease": [1], "Diabetes": [1], "Depression": [1], "HeadInjury": [0], "Hypertension": [0], "SystolicBP": [125], "DiastolicBP": [108], "CholesterolTotal": [270.5244657436494], "CholesterolLDL": [113.19711983229844], "CholesterolHDL": [35.326907803137615], "CholesterolTriglycerides": [152.87039903395123], "MMSE": [18.10555514327309], "FunctionalAssessment": [4.801435992718286], "MemoryComplaints": [0], "BehavioralProblems": [0], "ADL": [2.718906931446053], "Confusion": [0], "Disorientation": [0], "PersonalityChanges": [0], "DifficultyCompletingTasks": [1], "Forgetfulness": [1]}
        response = self.client.post('/predict', data=json.dumps(data))

        self.assertEqual(response.status_code, 200)
        response_data = response.json()
        
        self.assertEqual(type(response_data['predict']), int)
        self.assertEqual(type(response_data['confidence']), float)

if __name__ == '__main__':
    unittest.main(verbosity=2)