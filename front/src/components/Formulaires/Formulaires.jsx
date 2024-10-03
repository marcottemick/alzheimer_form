import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Arrow from "./Arrow";
import { useState } from "react";
import RecapValid from "./RecapValid";
import { datasFormatForms } from "./datasFormatForm";
import ContainerForm from "./ContainerForm";
import { inputSelect } from "../../utils";

const Formulaires = ({ }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        "FirstName": [""],
        "Name": [""],
        "Gender": [""],
        "Age": [""],
        "Ethnicity": [""],
        "EducationLevel": [""],
        "BMI": [""],
        "Smoking": [""],
        "AlcoholConsumption": [""],
        "PhysicalActivity": [""],
        "DietQuality": [""],
        "SleepQuality": [""],
        "FamilyHistoryAlzheimers": [""],
        "CardiovascularDisease": [""],
        "Diabetes": [""],
        "Depression": [""],
        "HeadInjury": [""],
        "Hypertension": [""],
        "SystolicBP": [""],
        "DiastolicBP": [""],
        "CholesterolTotal": [""],
        "CholesterolLDL": [""],
        "CholesterolHDL": [""],
        "CholesterolTriglycerides": [""],
        "MMSE": [""],
        "FunctionalAssessment": [""],
        "MemoryComplaints": [""],
        "BehavioralProblems": [""],
        "ADL": [""],
        "Confusion": [""],
        "Disorientation": [""],
        "PersonalityChanges": [""],
        "DifficultyCompletingTasks": [""],
        "Forgetfulness": [""]
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

    /** Actualise les valeurs dans formData
     * @param {*} e 
     */
    const handleChangeFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: [value]
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
                {Object.keys(datasFormatForms).map((page, idPage) =>
                <div className={currentPage === idPage ? "" : "hidden"}>
                    <ContainerForm title={datasFormatForms[page].title}>
                        {Object.keys(datasFormatForms[page].details).map(input =>
                            <div key={input}>
                                {inputSelect(input, datasFormatForms[page].details[input], formData, handleChangeFormData)}
                            </div>
                        )}
                    </ContainerForm>                    
                </div>
                )}                
                <div className={currentPage === 6 ? "" : "hidden"}>
                    <RecapValid
                        title="Récapitulation des informations"
                        formData={formData} />
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