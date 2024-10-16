import { useState } from "react";
import InputSearch from "./InputSearch";
import { fetchGetPatientData } from "../../hooks/endpoints";
import AntecedentPatient from "./AntedencentPatient";

/** Affichage des antécédents en fonction de la recherche patient effectué */
const Antecedents = () => {
    // stocke la valeur du patient sélectionné
    const [patient, setPatient] = useState("");
    // stocke les données chargées
    const [patientDatas, setPatientDatas] = useState([]);
    // surveille le chargement des données
    const [isLoading, setIsLoading] = useState(false);
    // stocke l'ensemble des antécédents rétractés
    const [isOpen, setIsOpen] = useState(new Set());

    /** Récupère les données liés à un patient sélectionné
     */
    const handleValidPatient = () => {
        setIsLoading(true);
        fetchGetPatientData({ "Patient": patient })
            .then(response => setPatientDatas(response.patientData))
            .catch(e => console.error(e))
            .finally(() => setIsLoading(false))
    };

    /** Gestion de l'ouverture d'un antécédent patient
     * @param {Number} id 
     */
    const handleSeeData = (id) => {
        let isOpenCopy = new Set(isOpen)
        if(isOpen.has(id)) {
            isOpenCopy.delete(id);
            setIsOpen(isOpenCopy) ;           
        }else {
            isOpenCopy.add(id);
            setIsOpen(isOpenCopy);
        };
    };

    return (
        <div
            className="flex justify-center overflow-x-hidden overflow-y-hidden"
            style={{ height: 'calc(100vh - 80px)' }}>
            <div>
                <label htmlFor="patients" className="flex justify-center">
                    <InputSearch
                        patient={patient}
                        setPatient={setPatient}
                        handleValidPatient={handleValidPatient}
                        setPatientDatas={setPatientDatas}
                    />
                </label>
                {!isLoading && <div className="pb-4 overflow-y-scroll"
                 style={{ height: 'calc(100vh - 200px)' }}>
                    {patientDatas.map((data, id) =>
                        <div key={id}>
                            <AntecedentPatient 
                            isOpen={isOpen}
                            handleSeeData={handleSeeData}
                            id={id}
                            patientData={data} />
                        </div>
                    )}
                </div>}
            </div>
        </div>
    );
};

export default Antecedents;