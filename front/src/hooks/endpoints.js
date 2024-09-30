import axios from "axios";

export const fetchGetConnexion = () => {
    return axios.get('/connexion').then(response => response.data)
}