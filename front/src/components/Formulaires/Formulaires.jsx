import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Arrow from "./Arrow";
import DemographicDetail from "./DemographicDetail";
import LifestyleFactors from "./LifestyleFactors";
import MedicalHistory from "./MedicalHistory";
import ClinicalMeasurements from "./ClinicalMeasurements";
import CognitiveAssessments from "./CognitiveAssessments";
import Symptoms from "./Symptoms";
import { useState } from "react";
import RecapValid from "./RecapValid";

const Formulaires = ({ }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        "firstName": "",
        "name": "",
        "gender": "",
        "age": "",
        "ethnicity": "",
        "educationLevel": "",
        "BMI": "",
        "smoking": "",
        "alcohol": "",
        "PhysicalActivity": "",
        "dietQuality": "",
        "sleepQuality": "",
        "familyHistoryAlzheimers": "",
        "cardiovascularDisease": "",
        "diabete": "",
        "depression": "",
        "headInjury": "",
        "hypertension": "",
        "systolicBP":"",
        "diastolicBP": "",
        "cholesterolTotal": "",
        "cholesterolLDL": "",
        "cholesterolHDL": "",
        "cholesterolTriglycerides": "",
        "MMSE": "",
        "functionalAssessment": "",
        "memoryComplaints": "",
        "behavioralProblems": "",
        "ADL": "",
        "confusion": "",
        "disorientation": "",
        "personalityChanges": "",
        "difficultyCompletingTasks": "",
        "forgetfulness": ""
    })

    /** Permet de change de page de formulaire
     * @param {String} dir 
     */
    const handleChangeElement = (dir) => {
        if (dir === 'back') {
            setCurrentPage(prev => prev -= 1);
        }
        else {
            setCurrentPage(prev => prev += 1)
        }
    };

    const handleChangeFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div
            className="flex overflow-x-hidden"
            style={{ height: 'calc(100vh - 80px)' }}>
            <div
                onClick={() => { currentPage > 0 && handleChangeElement("back") }}
                className="flex items-center"
                style={{ marginLeft: -100 }}>
                <Arrow>
                    <IoIosArrowBack style={{ fontSize: 150, marginLeft: 70 }} />
                </Arrow>
            </div>
            <div className="w-11/12 flex justify-center items-center">
                <div className={currentPage === 0 ? "" : "hidden"}>
                    <DemographicDetail
                        title='Informations personnelles'
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 1 ? "" : "hidden"}>
                    <LifestyleFactors
                        title="Facteurs liés au style de vie"
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 2 ? "" : "hidden"}>
                    <MedicalHistory
                        title="Antécédents familiaux"
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 3 ? "" : "hidden"}>
                    <ClinicalMeasurements
                        title="Analyses médicales"
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 4 ? "" : "hidden"}>
                    <CognitiveAssessments
                        title="Tests cognitifs"
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 5 ? "" : "hidden"}>
                    <Symptoms
                        title="Symptômes"
                        formData={formData}
                        setFormData={handleChangeFormData} />
                </div>
                <div className={currentPage === 6 ? "" : "hidden"}>
                    <RecapValid
                        title="Récapitulation des informations"
                        formData={formData}
                    />
                </div>
            </div>
            <div
                onClick={() => { currentPage < 6 && handleChangeElement("forward") }}
                className="flex items-center"
                style={{ marginRight: -100 }}>
                <Arrow>
                    <IoIosArrowForward style={{ fontSize: 150, marginRight: 70 }} />
                </Arrow>
            </div>
        </div>
    );
};

export default Formulaires;