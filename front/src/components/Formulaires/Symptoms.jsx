import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const Symptoms = ({ title, formData, setFormData }) => {

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={formData.confusion}
                setRadio={setFormData}
                inputId="confusion"
                label="Confusion"
                description="Présence de confusion chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.disorientation}
                setRadio={setFormData}
                inputId="disorientation"
                label="Désorientation"
                description="Présence d'une perte d'orientation chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.personalityChanges}
                setRadio={setFormData}
                inputId="personalityChanges"
                label="Changement de personnalité"
                description="Présence d'un changement de personnalité chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.difficultyCompletingTasks}
                setRadio={setFormData}
                inputId="difficultyCompletingTasks"
                label="Difficulté à terminer une tâche"
                description="Le patient(e) arrive-t'il à terminer une tâche ?"
            />
            <TypeRadio
                radio={formData.forgetfulness}
                setRadio={setFormData}
                inputId="forgetfulness"
                label="Oubli"
                description="Le patient(e) présente des oublis ?"
            />
        </ContainerForm>
    );
};

export default Symptoms;