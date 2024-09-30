import unittest
import json
from API import app

class AppTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.maxDiff = None

    def test_connexion(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.get_data(as_text=True))

        self.assertEqual(data['response'], 'connection au serveur')

if __name__ == '__main__':
    unittest.main(verbosity= 2)