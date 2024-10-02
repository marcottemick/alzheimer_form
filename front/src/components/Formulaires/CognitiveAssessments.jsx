import { useState } from "react";
import ContainerForm from "./ContainerForm";
import TypeNum from "./Inputs/TypeNum";
import TypeRadio from "./Inputs/TypeRadio";

const CognitiveAssessments = ({ title }) => {
    const [MMSE, setMMSE] = useState("");
    const [functionalAssessment, setFunctionalAssessment] = useState("");
    const [memoryComplaints, setMemoryComplaints] = useState("");
    const [behavioralProblems, setBehavioralProblems] = useState("");
    const [ADL, setADL] = useState("");

    return (
        <ContainerForm title={title}>
            <TypeNum
                num={MMSE}
                setNum={setMMSE}
                inputId={'MMSE'}
                label="MMSE"
                description="score du Mini-Mental State Examination, compris entre 0 et 30"
            />
            <TypeNum
                num={functionalAssessment}
                setNum={setFunctionalAssessment}
                inputId={'functionalAssessment'}
                label="Évaluation fonctionnelle"
                description="Score d’évaluation fonctionnelle, allant de 0 à 10"
            />
            <TypeRadio
                radio={memoryComplaints}
                setRadio={setMemoryComplaints}
                inputId="memoryComplaints"
                label="Perte de mémoire"
                description="Indiquer la perte de mémoire chez le patient(e)"
            />
            <TypeRadio
                radio={behavioralProblems}
                setRadio={setBehavioralProblems}
                inputId="behavioralProblems"
                label="Problèmes de comportement"
                description="Indiquer la présence de problèmes de comportementchez le patient(e)"
            />
            <TypeNum
                num={ADL}
                setNum={setADL}
                inputId={'ADL'}
                label="Activités de la vie quotidienne"
                description="Score des activités de la vie quotidienne, allant de 0 à 10"
            />

        </ContainerForm>
    );
};

export default CognitiveAssessments;