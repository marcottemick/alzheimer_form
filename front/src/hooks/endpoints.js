import axios from "axios";

/** Récupère la valeur de connexion avec le back
 * @returns {bool}
 */
export const fetchGetConnexion = () => {
    return axios.get('/connexion')
        .then(response => response.data);
};

/** Récupère la prédiction
 * @param {{}} obj 
 * @returns {{Predict: Number, Confidence: Number, Response: boolean, Patient: {FirstName: string, Name: string}; Form: {}}}
 */
export const fetchPostPredict = (obj) => {
    return axios.post('/predict',
        obj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data);
};

/** Envoie en base de données
 * 
 * @param {{}} obj 
 * @returns {boolean}
 */
export const fetchPostPredictDB = (obj) => {
    return axios.post('/predict_db',
        obj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data)
};

/** Envoie la liste des patients
 * @returns {[{patient: string}]}
 */
export const fetchGetPatients = () => {
    return axios.get("/patients")
        .then(response => response.data);
};

/** Envoie l'ensemble des formumaires avec la prédiction d'un patient sélectionné
 * @param {{Patient: str}} obj 
 * @returns {{}}
 */
export const fetchGetPatientData = (obj) => {
    return axios.post("/patient_data",
        obj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data);
}