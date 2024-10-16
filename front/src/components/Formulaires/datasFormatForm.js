const NonOuiOptions = { "0": "Non", "1": "Oui" }

/** Contient les données nécessaires à la générations des formulaires et à l'affichage du récap
 */
export const datasFormatForms = {
    "DemographicDetail": {
        "title": "Informations personnelles",
        "details": {
            "Name": {
                "name": "Nom",
                "unity": null,
                "options": false,
                "type": "text",
                "label": "Prénom",
                "description": "Indiquer le prénom du patient(e)"
            },
            "FirstName": {
                "name": "Prénom",
                "unity": null,
                "options": false,
                "type": "text",
                "label": "Prénom",
                "description": "Indiquer le nom du patient(e)"
            },
            "Age": {
                "name": "Âge",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 60,
                "max": 90,
                "step": 1,
                "label": "Âge",
                "description": "Indiquer l'âge du patient(e)"
            },
            "Gender": {
                "name": "Sexe",
                "unity": null,
                "options": true,
                "optionsEqual": { "0": "Homme", "1": "Femme" },
                "type": "options",
                "label": "Sexe",
                "description": "Indiquer le sexe du patient(e)"
            },
            "Ethnicity": {
                "name": "Ethnicité",
                "unity": null,
                "options": true,
                "optionsEqual": { "0": "Caucasien", "1": "Subsaharienne", "2": "Asiatique", "3": "Autre" },
                "type": "options",
                "label": "Ethnicité",
                "description": "Sélectionner l'ethnicité du patient"
            },
            "EducationLevel": {
                "name": "Niv. d'étude",
                "unity": null,
                "options": true,
                "optionsEqual": { "0": "Collège", "1": "Lycée", "2": "bac+2/+3", "3": "sup à bac+3" },
                "type": "options",
                "label": "Niveau d'étude",
                "description": "Sélectionner le niveau d'étude du patient"
            }
        }
    },
    "LifestyleFactors": {
        "title": "Facteurs liés au style de vie",
        "details": {
            "BMI": {
                "name": "IMC",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 15,
                "max": 40,
                "step": 0.01,
                "label": "IMC",
                "description": "Indiquer l'indice de masse corporel du patient"
            },
            "Smoking": {
                "name": "Tabagisme",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Tabagisme",
                "description": "Est-ce que le patient(e) fume ?"
            },
            "AlcoholConsumption": {
                "name": "Alcoolémie",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 0,
                "max": 20,
                'step': 0.01,
                "label": "Alcoolémie",
                "description": "Indiquer le volume d'alcool consommé par semaine"
            },
            "PhysicalActivity": {
                "name": "Act. physique",
                "unity": "h",
                "options": false,
                "type": "num",
                "min": 0,
                "max": 10,
                "step": 0.1,
                "description": "Indiquer le nombre d'heure d'activité physique entre 0 et 10"
            },
            "DietQuality": {
                "name": "Qualité de l'alimentation",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 0,
                "max": 10,
                "step": 1,
                "description": "Indiquer le score de qualité de l'alimentation entre 0 et 10"
            },
            "SleepQuality": {
                "name": "Qualité du sommeil",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 4,
                "max": 10,
                "step": 0.01,
                "description": "Indiquer le score de qualité du sommeil entre 4 et 10"
            },
        }
    },
    "MedicalHistory": {
        "title": "Antécédents familiaux",
        "details": {
            "FamilyHistoryAlzheimers": {
                "name": "Antécédent familiaux",
                "unity": null, "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent familiaux",
                "description": "Présence de cas dans la famille ?"
            },
            "CardiovascularDisease": {
                "name": "Antécédent cardiaque",
                "unity": null, "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent cardiaque",
                "description": "Antécédent de maladie cardiaque chez le patient(e) ?"
            },
            "Diabetes": {
                "name": "Diabète",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent de diabète",
                "description": "Antécédent de diabète chez le patient(e) ?"
            },
            "Depression": {
                "name": "Dépression",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent de dépression",
                "description": "Antécédent de dépression chez le patient(e) ?"
            },
            "HeadInjury": {
                "name": "Traumatisme cranien",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent de traumatisme cranien",
                "description": "Antécédent de traumatisme cranien chez le patient(e) ?"
            },
            "Hypertension": {
                "name": "Hypertension",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Antécédent d'hypertension",
                "description": "Antécédent d'hypertension chez le patient(e) ?"
            },
        }
    },
    "ClinicalMeasurements": {
        "title": "Analyses médicales",
        "details": {
            "SystolicBP": {
                "name": "P. art. systolique",
                "unity": "mmHgh",
                "options": false,
                "type": 'num',
                "min": 90,
                "max": 180,
                "step": 0.01,
                "label": "Pression artérielle systolique",
                "description": "Pression artérielle systolique, comprise entre 90 et 180 mmHg"
            },
            "DiastolicBP": {
                "name": "P. art. diastolique",
                "unity": "mmHgh",
                "options": false,
                "type": 'num',
                "min": 60,
                "max": 120,
                "step": 0.01,
                "label": "Pression artérielle diastolique",
                "description": "Pression artérielle diastolique, comprise entre 60 et 120 mmHg"
            },
            "CholesterolTotal": {
                "name": "Taux de cholestérol tot.",
                "unity": "mg/dL",
                "options": false,
                "type": 'num',
                "min": 150,
                "max": 300,
                "step": 0.01,
                "label": "Taux de cholestérol total",
                "description": "Taux de cholestérol total, compris entre 150 et 300 mg/dL"
            },
            "CholesterolLDL": {
                "name": "Taux de cholestérol LDL",
                "unity": "mg/dL",
                "options": false,
                "type": 'num',
                "min": 50,
                "max": 200,
                "step": 0.01,
                "label": "Taux de cholestérol LDL",
                "description": "Taux de cholestérol des lipoprotéines de basse densité, compris entre 50 et 200 mg/dL"
            },
            "CholesterolHDL": {
                "name": "Taux de cholestérol HDL",
                "unity": "mg/dL",
                "options": false,
                "type": 'num',
                "min": 20,
                "max": 100,
                "step": 0.01,
                "label": "Taux de cholestérol HDL",
                "description": "Taux de cholestérol des lipoprotéines de haute densité, compris entre 20 et 100 mg/dL"
            },
            "CholesterolTriglycerides": {
                "name": "Taux de triglycérides",
                "unity": "mg/dL",
                "options": false,
                "type": 'num',
                "min": 20,
                "max": 400,
                "step": 0.01,
                "label": "Taux de triglycérides",
                "description": "Taux de triglycérides, variant de 50 à 400 mg/dL"
            },
        }
    },
    "CognitiveAssessments": {
        "title": "Tests cognitifs",
        "details": {
            "MMSE": {
                "name": "MMSE",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 0,
                "max": 30,
                "step": 1,
                "label": "MMSE",
                "description": "Score du Mini-Mental State Examination, compris entre 0 et 30",
            },
            "FunctionalAssessment": {
                "name": "Évaluation fonctionnelle",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 0,
                "max": 10,
                "step": 1,
                "label": "Évaluation fonctionnelle",
                "description": "Score d’évaluation fonctionnelle, allant de 0 à 10"
            },
            "MemoryComplaints": {
                "name": "Perte de mémoire",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Perte de mémoire",
                "description": "Il y a t'il une perte de mémoire chez le patient(e) ?",
            },
            "BehavioralProblems": {
                "name": "Prob. de comportement",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Problèmes de comportement",
                "description": "Il y a t'il de problèmes de comportementchez le patient(e) ?"
            },
            "ADL": {
                "name": "Act. de la vie quotidienne",
                "unity": null,
                "options": false,
                "type": "num",
                "min": 0,
                "max": 10,
                "step": 1,
                "label": "Activités de la vie quotidienne",
                "description": "Score des activités de la vie quotidienne, allant de 0 à 10"
            },
        }
    },
    "Symptoms": {
        "title": "Symptômes",
        "details": {
            "Confusion": {
                "name": "Confusion",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Confusion",
                "description": "Présence de confusion chez le patient(e) ?"
            },
            "Disorientation": {
                "name": "Désorientation",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Désorientation",
                "description": "Présence d'une perte d'orientation chez le patient(e) ?"
            },
            "PersonalityChanges": {
                "name": "Chang. de personnalité",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Changement de personnalité",
                "description": "Présence d'un changement de personnalité chez le patient(e) ?"
            },
            "DifficultyCompletingTasks": {
                "name": "Finir une tâches",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Difficulté à terminer une tâche",
                "description": "Le patient(e) arrive-t'il à terminer une tâche ?"
            },
            "Forgetfulness": {
                "name": "Oubli",
                "unity": null,
                "options": true,
                "optionsEqual": NonOuiOptions,
                "type": "radio",
                "label": "Oubli",
                "description": "Le patient(e) présente-t'il des oublis ?"
            },
        }
    }
};