import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const MedicalHistory = ({title, formData, setFormData}) => {

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={formData.familyHistoryAlzheimers}
                setRadio={setFormData}
                inputId="familyHistoryAlzheimers"
                label="Antécédent familiaux"
                description="Présence de cas dans la famille ?"
            />
             <TypeRadio
                radio={formData.cardiovascularDisease}
                setRadio={setFormData}
                inputId="cardiovascularDisease"
                label="Antécédent cardiaque"
                description="Antécédent de maladie cardiaque chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.diabete}
                setRadio={setFormData}
                inputId="diabete"
                label="Antécédent de diabète"
                description="Antécédent de diabète chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.depression}
                setRadio={setFormData}
                inputId="depression"
                label="Antécédent de dépression"
                description="Antécédent de dépression chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.headInjury}
                setRadio={setFormData}
                inputId="headInjury"
                label="Antécédent de traumatisme cranien"
                description="Antécédent de traumatisme cranien chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.hypertension}
                setRadio={setFormData}
                inputId="hypertension"
                label="Antécédent d'hypertension"
                description="Antécédent d'hypertension chez le patient(e) ?"
            />            
            
        </ContainerForm>
    );
};

export default MedicalHistory;