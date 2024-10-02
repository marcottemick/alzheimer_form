import { useState } from "react";
import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const Symptoms = ({ title }) => {
    const [confusion, setConfusion] = useState("");
    const [disorientation, setDisorientation] = useState("");
    const [personalityChanges, setPersonalityChanges] = useState("");
    const [difficultyCompletingTasks, setDifficultyCompletingTasks] = useState("");
    const [forgetfulness, setForgetfulness] = useState("");

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={confusion}
                setRadio={setConfusion}
                inputId="confusion"
                label="Confusion"
                description="Présence de confusion chez le patient(e) ?"
            />
            <TypeRadio
                radio={disorientation}
                setRadio={setDisorientation}
                inputId="disorientation"
                label="Désorientation"
                description="Présence d'une perte d'orientation chez le patient(e) ?"
            />
            <TypeRadio
                radio={personalityChanges}
                setRadio={setPersonalityChanges}
                inputId="personalityChanges"
                label="Changement de personnalité"
                description="Présence d'un changement de personnalité chez le patient(e) ?"
            />
            <TypeRadio
                radio={difficultyCompletingTasks}
                setRadio={setDifficultyCompletingTasks}
                inputId="difficultyCompletingTasks"
                label="Difficulté à terminer une tâche"
                description="Le patient(e) arrive-t'il à terminer une tâche ?"
            />
            <TypeRadio
                radio={forgetfulness}
                setRadio={setForgetfulness}
                inputId="forgetfulness"
                label="Oubli"
                description="Le patient(e) présente des oublis ?"
            />
        </ContainerForm>
    );
};

export default Symptoms;