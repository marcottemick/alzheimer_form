import ContainerForm from "./ContainerForm";
import TypeNum from "./Inputs/TypeNum";
import TypeRadio from "./Inputs/TypeRadio";

const CognitiveAssessments = ({ title, formData, setFormData }) => {

    return (
        <ContainerForm title={title}>
            <TypeNum
                num={formData.MMSE}
                setNum={setFormData}
                inputId='MMSE'
                label="MMSE"
                description="score du Mini-Mental State Examination, compris entre 0 et 30"
            />
            <TypeNum
                num={formData.functionalAssessment}
                setNum={setFormData}
                inputId="functionalAssessment"
                label="Évaluation fonctionnelle"
                description="Score d’évaluation fonctionnelle, allant de 0 à 10"
            />
            <TypeRadio
                radio={formData.memoryComplaints}
                setRadio={setFormData}
                inputId="memoryComplaints"
                label="Perte de mémoire"
                description="Indiquer la perte de mémoire chez le patient(e)"
            />
            <TypeRadio
                radio={formData.behavioralProblems}
                setRadio={setFormData}
                inputId="behavioralProblems"
                label="Problèmes de comportement"
                description="Indiquer la présence de problèmes de comportementchez le patient(e)"
            />
            <TypeNum
                num={formData.ADL}
                setNum={setFormData}
                inputId='ADL'
                label="Activités de la vie quotidienne"
                description="Score des activités de la vie quotidienne, allant de 0 à 10"
            />

        </ContainerForm>
    );
};

export default CognitiveAssessments;