import { useEffect, useState } from "react";
import ContainerForm from "./ContainerForm"
import { fetchPostPredictDB } from "../../hooks/endpoints";

const ResponseForm = ({ formData, predict, setReinit }) => {
    const [error, setError] = useState(false);

    /** Réinitiation du formulaire
     */
    const handleReset = () => {
        setReinit(prev => prev = !prev);
    };

    useEffect(() => {
        fetchPostPredictDB(predict)
            .then(response => {
                setError(!response.response);
            });
    }, [predict]);

    const responseRenderer = () => {
        return (
            <ContainerForm title="Résultat du formulaire">
                <div className="flex flex-col justify-center items-center">
                    <p className="m-4">Résultat du formulaire pour {formData.Gender === "0" ? "le patient" : "la patiente"} {formData.Name} {formData.FirstName} {formData.Gender === "0" ? 'âgé' : "âgée"} de {formData.Age} ans.</p>
                    <p className="m-4 font-bold text-4xl text-blue-500">{predict.Predict === 0 ? <span className="underline underline-offset-1">Négatif</span> : <span className="underline underline-offset-1">Positif</span>} à la maladie de Alzheimer </p>
                    <p className="m-4 font-bold text-4xl text-blue-500">Taux de confiance : <span className="underline underline-offset-1">{predict.Confidence}%</span></p>
                </div>
                <div className="bg-blue-400 w-full rounded-b-md h-20 flex justify-center items-center">
                    <div
                        onClick={handleReset}
                        className="bg-gray-200 w-fit px-4 py-2 rounded-md transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500 cursor-pointer">
                        Faire un autre test
                    </div>
                </div>
            </ContainerForm>
        );
    };

    if (error) {
        return <div>Une erreur est survenue durant le processus</div>
    } else {
        return responseRenderer()
    }
};

export default ResponseForm