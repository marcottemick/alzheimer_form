import { useState } from "react";
import ContainerForm from "./ContainerForm";
import TypeRadio from "./Inputs/TypeRadio";

const MedicalHistory = ({title}) => {
    const [familyHistoryAlzheimers, setFamilyHistoryAlzheimers] = useState("");
    const [cardiovascularDisease, setCardiovascularDisease] = useState("");
    const [diabete, setDiabete] = useState("");
    const [depression, setDepression] = useState("");
    const [headInjury, setHeadInjury] = useState("");
    const [hypertension, setHypertension] = useState("");

    return (
        <ContainerForm title={title}>
            <TypeRadio
                radio={familyHistoryAlzheimers}
                setRadio={setFamilyHistoryAlzheimers}
                inputId="familyHistoryAlzheimers"
                label="Antécédent familiaux"
                description="Présence de cas dans la famille ?"
            />
             <TypeRadio
                radio={cardiovascularDisease}
                setRadio={setCardiovascularDisease}
                inputId="cardiovascularDisease"
                label="Antécédent cardiaque"
                description="Antécédent de maladie cardiaque chez le patient(e) ?"
            />
             <TypeRadio
                radio={diabete}
                setRadio={setDiabete}
                inputId="diabete"
                label="Antécédent de diabète"
                description="Antécédent de diabète chez le patient(e) ?"
            />
             <TypeRadio
                radio={depression}
                setRadio={setDepression}
                inputId="depression"
                label="Antécédent de dépression"
                description="Antécédent de dépression chez le patient(e) ?"
            />
             <TypeRadio
                radio={headInjury}
                setRadio={setHeadInjury}
                inputId="headInjury"
                label="Antécédent de traumatisme cranien"
                description="Antécédent de traumatisme cranien chez le patient(e) ?"
            />
             <TypeRadio
                radio={hypertension}
                setRadio={setHypertension}
                inputId="hypertension"
                label="Antécédent d'hypertension"
                description="Antécédent d'hypertension chez le patient(e) ?"
            />
            
            
        </ContainerForm>
    );
};

export default MedicalHistory;