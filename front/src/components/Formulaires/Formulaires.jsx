import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Arrow from "./Arrow";
import { useEffect, useState } from "react";
import RecapValid from "./RecapValid";
import { datasFormatForms } from "./datasFormatForm";
import ContainerForm from "./ContainerForm";
import { inputSelect } from "../../utils";
import ResponseForm from "./ResponseForm";

const Formulaires = ({ }) => {
    const [currentPage, setCurrentPage] = useState(0);
    // const formDataInit = {
    //     "FirstName": [""],
    //     "Name": [""],
    //     "Gender": [""],
    //     "Age": [""],
    //     "Ethnicity": [""],
    //     "EducationLevel": [""],
    //     "BMI": [""],
    //     "Smoking": [""],
    //     "AlcoholConsumption": [""],
    //     "PhysicalActivity": [""],
    //     "DietQuality": [""],
    //     "SleepQuality": [""],
    //     "FamilyHistoryAlzheimers": [""],
    //     "CardiovascularDisease": [""],
    //     "Diabetes": [""],
    //     "Depression": [""],
    //     "HeadInjury": [""],
    //     "Hypertension": [""],
    //     "SystolicBP": [""],
    //     "DiastolicBP": [""],
    //     "CholesterolTotal": [""],
    //     "CholesterolLDL": [""],
    //     "CholesterolHDL": [""],
    //     "CholesterolTriglycerides": [""],
    //     "MMSE": [""],
    //     "FunctionalAssessment": [""],
    //     "MemoryComplaints": [""],
    //     "BehavioralProblems": [""],
    //     "ADL": [""],
    //     "Confusion": [""],
    //     "Disorientation": [""],
    //     "PersonalityChanges": [""],
    //     "DifficultyCompletingTasks": [""],
    //     "Forgetfulness": [""]
    // }
    const formDataInit = {
        "FirstName": ["Arhur"],
        "Name": ["Martin"],
        "Gender": ["0"],
        "Age": ["65"],
        "Ethnicity": ["1"],
        "EducationLevel": ["3"],
        "BMI": ["15"],
        "Smoking": ["0"],
        "AlcoholConsumption": ["15"],
        "PhysicalActivity": ["5"],
        "DietQuality": ["5"],
        "SleepQuality": ["5"],
        "FamilyHistoryAlzheimers": ["0"],
        "CardiovascularDisease": ["1"],
        "Diabetes": ["0"],
        "Depression": ["0"],
        "HeadInjury": ["1"],
        "Hypertension": ["0"],
        "SystolicBP": ["150"],
        "DiastolicBP": ["100"],
        "CholesterolTotal": ["200"],
        "CholesterolLDL": ["200"],
        "CholesterolHDL": ["100"],
        "CholesterolTriglycerides": ["20"],
        "MMSE": ["15"],
        "FunctionalAssessment": ["0"],
        "MemoryComplaints": ["0"],
        "BehavioralProblems": ["0"],
        "ADL": ["0"],
        "Confusion": ["1"],
        "Disorientation": ["0"],
        "PersonalityChanges": ["1"],
        "DifficultyCompletingTasks": ["0"],
        "Forgetfulness": ["0"]
    }
    const [formData, setFormData] = useState(formDataInit);
    const [predict, setPredict] = useState({});
    const [reinit, setReinit] = useState(false);

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

    useEffect(() => {
        setPredict({});
        setFormData(formDataInit);
        setCurrentPage(0);
    }, [reinit])

    return (
        <div
            className="flex justify-center overflow-x-hidden"
            style={{ height: 'calc(100vh - 80px)' }}>
            {Object.keys(predict).length === 0 ? <div
                onClick={() => { currentPage > 0 && handleChangeElement("back") }}
                className="flex items-center"
                style={{ marginLeft: -100 }}>
                <Arrow>
                    <IoIosArrowBack style={{ fontSize: 150, marginLeft: 70 }} />
                </Arrow>
            </div> : null}
            {Object.keys(predict).length === 0 ?
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
                            formData={formData}
                            setPredict={setPredict} />
                    </div>
                </div> :
                <div className="w-11/12 flex justify-center items-center">
                    <ResponseForm
                        formData={formData}
                        predict={predict}
                        setReinit={setReinit} />
                </div>
            }
            {Object.keys(predict).length === 0 ? <div
                onClick={() => { currentPage < 6 && handleChangeElement("forward") }}
                className="flex items-center"
                style={{ marginRight: -100 }}>
                <Arrow>
                    <IoIosArrowForward style={{ fontSize: 150, marginRight: 70 }} />
                </Arrow>
            </div> : null}
        </div>
    );
};

export default Formulaires;