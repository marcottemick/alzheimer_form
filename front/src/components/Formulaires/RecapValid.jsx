import { fetchPostPredict } from "../../hooks/endpoints";
import ContainerForm from "./ContainerForm"
import { datasFormatForms } from "./datasFormatForm";
import Recap from "./Recap";

const RecapValid = ({ title, formData, setPredict }) => {  

    const handleSubmit = () => {
        let keyProblem = true;
        for(let key in formData) {
            if(formData[key][0] === "") {
                keyProblem = false
                break
            } 
        }
        if(keyProblem) {
            const obj = JSON.stringify(formData)
            fetchPostPredict(obj).then(response => setPredict(response));
        }
        else {
            console.log('Présence de valeur(s) non renseignée(s)')
        }
    }

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
                        className="bg-gray-200 w-fit px-4 py-2 rounded-md transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500 cursor-pointer">
                        Analyser
                    </div>
                </div>
            </div>
        </ContainerForm>
    );
};

export default RecapValid;