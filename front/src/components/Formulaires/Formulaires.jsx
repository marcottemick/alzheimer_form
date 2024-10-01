import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Arrow from "./Arrow";
import DemographicDetail from "./DemographicDetail";
import LifestyleFactors from "./LifestyleFactors";
import MedicalHistory from "./MedicalHistory";
import ClinicalMeasurements from "./ClinicalMeasurements";
import CognitiveAssessments from "./CognitiveAssessments";
import Symptoms from "./Symptoms";
import { useState } from "react";

const Formulaires = ({ }) => {
    const [form, setForm] = useState(0);

    const handleChangeElement = (dir) => {
        if (dir === 'back') {
            setForm(prev => prev -= 1);
        }
        else {
            setForm(prev => prev += 1)
        }
    }

    console.log(form)

    return (
        <div
            className="flex overflow-x-hidden"
            style={{ height: 'calc(100vh - 80px)' }}>
            <div
                onClick={() => {form > 0 && handleChangeElement("back")}}
                className="flex items-center"
                style={{ marginLeft: -100 }}>
                <Arrow>
                    <IoIosArrowBack style={{ fontSize: 150, marginLeft: 70 }} />
                </Arrow>
            </div>
            <div className="w-11/12 flex justify-center items-center">
                <div className={form === 0 ? "" : "hidden"}>
                    <DemographicDetail />
                </div>
                <div className={form === 1 ? "" : "hidden"}>
                    <LifestyleFactors />
                </div>
                <div className={form === 2 ? "" : "hidden"}>
                    <MedicalHistory />
                </div>
                <div className={form === 3 ? "" : "hidden"}>
                    <ClinicalMeasurements />
                </div>
                <div className={form === 4 ? "" : "hidden"}>
                    <CognitiveAssessments />
                </div>
                <div className={form === 5 ? "" : "hidden"}>
                    <Symptoms />
                </div>
            </div>
            <div
                onClick={() => {form < 5 && handleChangeElement("forward")}}
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