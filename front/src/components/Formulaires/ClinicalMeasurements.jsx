import { useState } from "react";
import ContainerForm from "./ContainerForm";
import TypeNum from "./Inputs/TypeNum";

const ClinicalMeasurements = ({ title }) => {
    const [systolicBP, setSystolicBP] = useState("");
    const [diastolicBP, setDiastolicBP] = useState("");
    const [cholesterolTotal, setCholesterolTotal] = useState("");
    const [cholesterolLDL, setCholesterolLDL] = useState("");
    const [cholesterolHDL, setCholesterolHDL] = useState("");
    const [cholesterolTriglycerides, setCholesterolTriglycerides] = useState("");

    return (
        <ContainerForm title={title}>
            <TypeNum
                num={systolicBP}
                setNum={setSystolicBP}
                inputId="systolicBP"
                label="Pression artérielle systolique"
                min={90}
                max={180}
                step={0.01}
                description="Pression artérielle systolique, comprise entre 90 et 180 mmHg"
            />
            <TypeNum
                num={diastolicBP}
                setNum={setDiastolicBP}
                inputId="diastolicBP"
                label="Pression artérielle diastolique"
                min={60}
                max={120}
                step={0.01}
                description="Pression artérielle diastolique, comprise entre 60 et 120 mmHg"
            />
            <TypeNum
                num={cholesterolTotal}
                setNum={setCholesterolTotal}
                inputId="cholesterolTotal"
                label="Taux de cholestérol total"
                min={150}
                max={300}
                step={0.01}Pression
                description="Taux de cholestérol total, compris entre 150 et 300 mg/dL"
            />
            <TypeNum
                num={cholesterolLDL}
                setNum={setCholesterolLDL}
                inputId="cholesterolLDL"
                label="Taux de cholestérol LDL"
                min={50}
                max={200}
                step={0.01}
                description="Taux de cholestérol des lipoprotéines de basse densité, compris entre 50 et 200 mg/dL"
            />
            <TypeNum
                num={cholesterolHDL}
                setNum={setCholesterolHDL}
                inputId="cholesterolHDL"
                label="Taux de cholestérol HDL"
                min={20}
                max={100}
                step={0.01}
                description="Taux de cholestérol des lipoprotéines de haute densité, compris entre 20 et 100 mg/dL"
            />
            <TypeNum
                num={cholesterolTriglycerides}
                setNum={setCholesterolTriglycerides}
                inputId="cholesterolTriglycerides"
                label="Taux de triglycérides"
                min={50}
                max={400}
                step={0.01}
                description="Taux de triglycérides, variant de 50 à 400 mg/dL"
            />
        </ContainerForm>
    );
};

export default ClinicalMeasurements;