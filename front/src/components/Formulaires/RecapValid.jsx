import { fetchPostPredict } from "../../hooks/endpoints";
import ContainerForm from "./ContainerForm"
import Recap from "./Recap";

const RecapValid = ({ title, formData }) => {
    const NonOuiOptions = { "0": "Non", "1": "Oui" }

    const datasFormatForms = {
        "DemographicDetail": {
            "title": "Informations personnelles",
            "details": {
                "Name": { "name": "Nom", "unity": null, "options": false },
                "FirstName": { "name": "Prénom", "unity": null, "options": false },
                "Age": { "name": "Âge", "unity": null, "options": false },
                "Gender": { "name": "Sexe", "unity": null, "options": true, "optionsEqual": { "0": "Homme", "1": "Femme" } },
                "Ethnicity": { "name": "Ethnicité", "unity": null, "options": true, "optionsEqual": { "0": "Caucasien", "1": "Subsaharienne", "2": "Asiatique", "3": "Autre" } },
                "EducationLevel": { "name": "Niv. d'étude", "unity": null, "options": true, "optionsEqual": { "0": "Collège", "1": "Lycée", "2": "bac+2/+3", "3": "sup à bac+3" } }
            }
        },
        "LifestyleFactors": {
            "title": "Facteurs liés au style de vie",
            "details": {
                "BMI": { "name": "IMC", "unity": null, "options": false },
                "Smoking": { "name": "Tabagisme", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "AlcoholConsumption": { "name": "Alcoolémie", "unity": null, "options": false },
                "PhysicalActivity": { "name": "Act. physique", "unity": "h", "options": false },
                "DietQuality": { "name": "Qualité de l'alimentation", "unity": null, "options": false },
                "SleepQuality": { "name": "Qualité du sommeil", "unity": null, "options": false },
            }
        },
        "MedicalHistory": {
            "title": "Antécédents familiaux",
            "details": {
                "FamilyHistoryAlzheimers": { "name": "Antécédent familiaux", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "CardiovascularDisease": { "name": "Antécédent cardiaque", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "Diabetes": { "name": "Diabète", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "Depression": { "name": "Dépression", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "HeadInjury": { "name": "Traumatisme cranien", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "Hypertension": { "name": "Hypertension", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
            }
        },
        "ClinicalMeasurements": {
            "title": "Analyses médicales",
            "details": {
                "SystolicBP": { "name": "P. art. systolique", "unity": "mmHgh", "options": false },
                "DiastolicBP": { "name": "P. art. diastolique", "unity": "mmHgh", "options": false },
                "CholesterolTotal": { "name": "Taux de cholestérol tot.", "unity": "mg/dL", "options": false },
                "CholesterolLDL": { "name": "Taux de cholestérol LDL", "unity": "mg/dL", "options": false },
                "CholesterolHDL": { "name": "Taux de cholestérol HDL", "unity": "mg/dL", "options": false },
                "CholesterolTriglycerides": { "name": "Taux de triglycérides", "unity": "mg/dL", "options": false },
            }
        },
        "CognitiveAssessments": {
            "title": "Tests cognitifs",
            "details": {
                "MMSE": { "name": "MMSE", "unity": null, "options": false },
                "FunctionalAssessment": { "name": "Évaluation fonctionnelle", "unity": null, "options": false },
                "MemoryComplaints": { "name": "Perte de mémoire", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "BehavioralProblems": { "name": "Prob. de comportement", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "ADL": { "name": "Act. de la vie quotidienne", "unity": null, "options": false },
            }
        },
        "Symptoms": {
            "title": "Symptômes",
            "details": {
                "Confusion": { "name": "Confusion", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "Disorientation": { "name": "Désorientation", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "PersonalityChanges": { "name": "Chang. de personnalité", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "DifficultyCompletingTasks": { "name": "Finir une tâches", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "Forgetfulness": { "name": "Oubli", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
            }
        }
    };

    const handleSubmit = () => {
        let keyProblem = true;
        for(let key in formData) {
            if(formData[key].length === 0) {
                keyProblem = false
                break
            } 
        }
        if(keyProblem) {
            const obj = JSON.stringify(formData)
            console.log(obj)
            fetchPostPredict(obj).then(response => console.log(response));
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