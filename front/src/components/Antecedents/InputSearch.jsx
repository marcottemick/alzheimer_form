import { useEffect, useState } from "react";
import { fetchGetPatients } from "../../hooks/endpoints";
import { StandardCSS } from "../../utils";

/** Recherche d'un patient avec génération des options disponibles */
const InputSearch = ({ patient, setPatient,  handleValidPatient }) => {
    // contient l'ensemble des patients de la base de données
    const [patients, setPatients] = useState([]);

    // appel par défaut l'ensemble des patients de la base de données
    useEffect(() => {
        fetchGetPatients()
            .then(response => setPatients(response.patients))
            .catch(e => {
                console.error(e.message);
            })
    }, []);

    /** Modifie la valeur du patient sélectionné
     *  * @param {*} e 
     */
    const handleInputChange = (e) => {
        setPatient(e.target.value);
    };

    return (
        <div style={{width: 615}}>
            <div className="bg-gray-100 rounded-md m-2 p-2">
                <label>
                    Rechercher un patient:
                    <input
                        type="text"
                        list='patients'
                        value={patient}
                        onChange={handleInputChange} />
                    <datalist id="patients">
                        {/* génère une liste d'option sélectionnable des patients présent dans la base de données */}
                        {
                            patients.map((patient, index) =>
                                <option value={patient.patient} key={index}></option>
                            )
                        }
                    </datalist>
                </label>
                <button
                    // bouton de validation de la recherche
                    className={StandardCSS.btn}
                    onClick={handleValidPatient}><div>
                        Valider
                    </div>
                </button>
                <button
                    // bouton de rechargement de l'ensemble des données
                    className={StandardCSS.btn}
                    onClick={() => {
                        setPatient('');
                    }}>
                    <div>
                        Réinitialiser
                    </div>
                </button>
            </div>
        </div>
    );
};

export default InputSearch;