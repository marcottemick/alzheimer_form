import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const MedicalHistory = ({title, formData, setFormData}) => {

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={formData.FamilyHistoryAlzheimers}
                setRadio={setFormData}
                inputId="FamilyHistoryAlzheimers"
                label="Antécédent familiaux"
                description="Présence de cas dans la famille ?"
            />
             <TypeRadio
                radio={formData.CardiovascularDisease}
                setRadio={setFormData}
                inputId="CardiovascularDisease"
                label="Antécédent cardiaque"
                description="Antécédent de maladie cardiaque chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.Diabetes}
                setRadio={setFormData}
                inputId="Diabetes"
                label="Antécédent de diabète"
                description="Antécédent de diabète chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.Depression}
                setRadio={setFormData}
                inputId="Depression"
                label="Antécédent de dépression"
                description="Antécédent de dépression chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.HeadInjury}
                setRadio={setFormData}
                inputId="HeadInjury"
                label="Antécédent de traumatisme cranien"
                description="Antécédent de traumatisme cranien chez le patient(e) ?"
            />
             <TypeRadio
                radio={formData.Hypertension}
                setRadio={setFormData}
                inputId="Hypertension"
                label="Antécédent d'hypertension"
                description="Antécédent d'hypertension chez le patient(e) ?"
            />            
            
        </ContainerForm>
    );
};

export default MedicalHistory;