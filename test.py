import unittest
import json
from fastapi.testclient import TestClient
from back.API import app  # Ton application FastAPI

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

if __name__ == '__main__':
    unittest.main(verbosity=2)