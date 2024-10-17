import { toast } from "react-toastify";
import { fetchPostPredict, fetchPostPredictDB } from "../../hooks/endpoints";
import { StandardCSS } from "../../utils";
import ContainerForm from "./ContainerForm"
import { datasFormatForms } from "./datasFormatForm";
import Recap from "./Recap";

/** Présentation de l'ensemble des données renseignées dans les formulaires et validation */
const RecapValid = ({ title, formData, setPredict, setError }) => {

    /** Envoie du formulaire au bacj après vérification que toutes les données ont été renseignées
     */
    const handleSubmit = () => {
        let keyProblem = true;
        for (let key in formData) {
            if (formData[key][0] === "") {
                keyProblem = false
                break
            }
        }
        if (keyProblem) {
            const obj = JSON.stringify(formData)
            fetchPostPredict(obj)
                .then(response => {
                    setPredict(response);
                    fetchPostPredictDB(response)
                    .then(response => console.log(response.response));
                })
                .catch(e => {
                    console.error(e);
                    setError(true);
                })
            }
            else {
                console.log("Une ou plusieurs informations sont manquantes !");
                toast.error(
                    <p>Une ou plusieurs informations sont manquantes !</p>,
                    {
                        position: "bottom-right",
                        autoClose: 5000,
                        closeOnClick: true,
                        draggable: false,
                        pauseOnHover: true,
                        closeButton: true,
                    }
                )
            };
    };

    return (
        <ContainerForm title={title}>
            <div className="flex flex-col content-between h-full">
                <div className="flex justify-around items-center flex-wrap my-12">
                    {Object.keys(datasFormatForms).map(key =>
                        <div key={key}>
                            <Recap
                                title={datasFormatForms[key].title}
                                dataSelect={datasFormatForms[key].details}
                                formData={formData}
                            />
                        </div>
                    )}
                </div>
                <div className="bg-blue-400 w-full rounded-b-md h-20 flex justify-center items-center">
                    <div
                        onClick={handleSubmit}
                        className={StandardCSS.btn}>
                        Analyser
                    </div>
                </div>
            </div>
        </ContainerForm>
    );
};

export default RecapValid;