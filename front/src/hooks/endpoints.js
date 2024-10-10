import axios from "axios";

export const fetchGetConnexion = () => {
    return axios.get('/connexion').then(response => response.data);
}

export const fetchPostPredict = (obj) => {
    return axios.post('/predict',
        obj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data);
}

export const fetchPostPredictDB = (obj) => {
    return axios.post('/predict_db',
        obj,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data)
}