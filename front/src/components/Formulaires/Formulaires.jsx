import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Arrow from "./Arrow";
import DemographicDetail from "./DemographicDetail";
import LifestyleFactors from "./LifestyleFactors";
import MedicalHistory from "./MedicalHistory";
import ClinicalMeasurements from "./ClinicalMeasurements";
import CognitiveAssessments from "./CognitiveAssessments";
import Symptoms from "./Symptoms";
import { useState } from "react";

const Formulaires = ({}) => {
    const [currentPage, setCurrentPage] = useState(0);

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

    return (
        <div
            className="flex overflow-x-hidden"
            style={{ height: 'calc(100vh - 80px)' }}>
            <div
                onClick={() => {currentPage > 0 && handleChangeElement("back")}}
                className="flex items-center"
                style={{ marginLeft: -100 }}>
                <Arrow>
                    <IoIosArrowBack style={{ fontSize: 150, marginLeft: 70 }} />
                </Arrow>
            </div>
            <div className="w-11/12 flex justify-center items-center">
                <div className={currentPage === 0 ? "" : "hidden"}>
                    <DemographicDetail title='Informations personnelles'/>
                </div>
                <div className={currentPage === 1 ? "" : "hidden"}>
                    <LifestyleFactors title="Facteurs liés au style de vie"/>
                </div>
                <div className={currentPage === 2 ? "" : "hidden"}>
                    <MedicalHistory title="Antécédents familiaux"/>
                </div>
                <div className={currentPage === 3 ? "" : "hidden"}>
                    <ClinicalMeasurements title="Analyses médicales"/>
                </div>
                <div className={currentPage === 4 ? "" : "hidden"}>
                    <CognitiveAssessments title="Tests cognitifs"/>
                </div>
                <div className={currentPage === 5 ? "" : "hidden"}>
                    <Symptoms title="Symptômes"/>
                </div>
            </div>
            <div
                onClick={() => {currentPage < 5 && handleChangeElement("forward")}}
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