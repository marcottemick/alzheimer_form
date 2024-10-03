import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const Symptoms = ({ title, formData, setFormData }) => {

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={formData.Confusion}
                setRadio={setFormData}
                inputId="Confusion"
                label="Confusion"
                description="Présence de confusion chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.Disorientation}
                setRadio={setFormData}
                inputId="Disorientation"
                label="Désorientation"
                description="Présence d'une perte d'orientation chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.PersonalityChanges}
                setRadio={setFormData}
                inputId="PersonalityChanges"
                label="Changement de personnalité"
                description="Présence d'un changement de personnalité chez le patient(e) ?"
            />
            <TypeRadio
                radio={formData.DifficultyCompletingTasks}
                setRadio={setFormData}
                inputId="DifficultyCompletingTasks"
                label="Difficulté à terminer une tâche"
                description="Le patient(e) arrive-t'il à terminer une tâche ?"
            />
            <TypeRadio
                radio={formData.Forgetfulness}
                setRadio={setFormData}
                inputId="Forgetfulness"
                label="Oubli"
                description="Le patient(e) présente des oublis ?"
            />
        </ContainerForm>
    );
};

export default Symptoms;