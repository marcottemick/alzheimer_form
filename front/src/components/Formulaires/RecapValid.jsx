import ContainerForm from "./ContainerForm"
import Recap from "./Recap";

const RecapValid = ({ title, formData }) => {
    console.log(formData)

    const NonOuiOptions = { "0": "Non", "1": "Oui" }

    const datasFormatForms = {
        "DemographicDetail": {
            "title": "Informations personnelles",
            "details": {
                "name": { "name": "Nom", "unity": null, "options": false },
                "firstName": { "name": "Prénom", "unity": null, "options": false },
                "age": { "name": "Âge", "unity": null, "options": false },
                "gender": { "name": "Sexe", "unity": null, "options": true, "optionsEqual": { "0": "Homme", "1": "Femme" } },
                "ethnicity": { "name": "Ethnicité", "unity": null, "options": true, "optionsEqual": { "0": "Caucasien", "1": "Subsaharienne", "2": "Asiatique", "3": "Autre" } },
                "educationLevel": { "name": "Niv. d'étude", "unity": null, "options": true, "optionsEqual": { "0": "Collège", "1": "Lycée", "2": "bac+2/+3", "3": "sup à bac+3" } }
            }
        },
        "LifestyleFactors": {
            "title": "Facteurs liés au style de vie",
            "details": {
                "BMI": { "name": "IMC", "unity": null, "options": false },
                "smoking": { "name": "Tabagisme", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "alcohol": { "name": "Alcoolémie", "unity": null, "options": false },
                "PhysicalActivity": { "name": "Act. physique", "unity": "h", "options": false },
                "dietQuality": { "name": "Qualité de l'alimentation", "unity": null, "options": false },
                "sleepQuality": { "name": "Qualité du sommeil", "unity": null, "options": false },
            }
        },
        "MedicalHistory": {
            "title": "Antécédents familiaux",
            "details": {
                "familyHistoryAlzheimers": { "name": "Antécédent familiaux", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "cardiovascularDisease": { "name": "Antécédent cardiaque", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "diabete": { "name": "Diabète", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "depression": { "name": "Dépression", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "headInjury": { "name": "Traumatisme cranien", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "hypertension": { "name": "Hypertension", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
            }
        },
        "ClinicalMeasurements": {
            "title": "Analyses médicales",
            "details": {
                "systolicBP": { "name": "P. art. systolique", "unity": "mmHgh", "options": false },
                "diastolicBP": { "name": "P. art. diastolique", "unity": "mmHgh", "options": false },
                "cholesterolTotal": { "name": "Taux de cholestérol tot.", "unity": "mg/dL", "options": false },
                "cholesterolLDL": { "name": "Taux de cholestérol LDL", "unity": "mg/dL", "options": false },
                "cholesterolHDL": { "name": "Taux de cholestérol HDL", "unity": "mg/dL", "options": false },
                "cholesterolTriglycerides": { "name": "Taux de triglycérides", "unity": "mg/dL", "options": false },
            }
        },
        "CognitiveAssessments": {
            "title": "Tests cognitifs",
            "details": {
                "MMSE": { "name": "MMSE", "unity": null, "options": false },
                "functionalAssessment": { "name": "Évaluation fonctionnelle", "unity": null, "options": false },
                "memoryComplaints": { "name": "Perte de mémoire", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "behavioralProblems": { "name": "Prob. de comportement", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "ADL": { "name": "Act. de la vie quotidienne", "unity": null, "options": false },
            }
        },
        "Symptoms": {
            "title": "Symptômes",
            "details": {
                "confusion": { "name": "Confusion", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "disorientation": { "name": "Désorientation", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "personalityChanges": { "name": "Chang. de personnalité", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "difficultyCompletingTasks": { "name": "Finir une tâches", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
                "forgetfulness": { "name": "Oubli", "unity": null, "options": true, "optionsEqual": NonOuiOptions },
            }
        }
    };

    return (
        <ContainerForm title={title}>
            {Object.keys(datasFormatForms).map(key =>
                <div key={key}>
                    <Recap        
                    title = {datasFormatForms[key].title}
                        dataSelect={datasFormatForms[key].details}
                        formData={formData}
                    />
                </div>
            )}
        </ContainerForm>
    );
};

export default RecapValid;