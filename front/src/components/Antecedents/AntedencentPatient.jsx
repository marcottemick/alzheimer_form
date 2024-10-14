import { datasFormatForms } from "../Formulaires/datasFormatForm";
import Recap from "../Formulaires/Recap";

/**Affichage des données d'un antécédent avec possibilité de la rétracter */
const AntecedentPatient = ({ patientData, handleSeeData, id, isOpen }) => {
    return (
        <div className={`flex justify-between bg-gray-200 my-8 rounded-md w-[1200px] ${isOpen.has(id) ? 'h-[450px]' : 'h-[100px]'}`}>
            <div className="flex justify-center items-center rounded-l-md bg-blue-400 h-full w-16">
                <p className="text-center">Âge: {patientData.Age}</p>
            </div>
            <div className="w-full">
                <p
                    className="w-full text-center"
                    onClick={() => handleSeeData(id)}>
                    Voir les renseignements
                </p>
                <div className="w-full flex justify-around items-center flex-wrap">
                    {isOpen.has(id) ? Object.keys(datasFormatForms).map(key =>
                        <div
                            key={key}
                        >
                            <Recap
                                title={datasFormatForms[key].title}
                                dataSelect={datasFormatForms[key].details}
                                formData={patientData} />
                        </div>
                    ) : <div></div>}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center rounded-r-md bg-blue-400 h-full w-24">
                <p className="text-center">Diagnostic: {patientData.Predict === 0 ? "Négatif" : "Postitif"} ({patientData.Confidence}%)</p>
            </div>
        </div>
    );
};

export default AntecedentPatient;