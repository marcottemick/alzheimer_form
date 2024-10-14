import { StandardCSS } from "../../utils";
import ContainerError from "../error/ContainerError";
import ContainerForm from "./ContainerForm"

/** Affichage de la prédiction */
const ResponseForm = ({ formData, predict, setReinit, error }) => {

    /** Réinitiation du formulaire
     */
    const handleReset = () => {
        setReinit(prev => prev = !prev);
    };

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
                        className={StandardCSS.btn}>
                        Faire un autre test
                    </div>
                </div>
            </ContainerForm>
        );
    };

    if (error) {
        return <ContainerError
            errorMessage="Une erreur est survenue durant le processus d'analyse du formulaire." />
    } else {
        return responseRenderer()
    }
};

export default ResponseForm