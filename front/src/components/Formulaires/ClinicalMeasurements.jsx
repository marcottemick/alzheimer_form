import ContainerForm from "./ContainerForm";
import TypeNum from "./Inputs/TypeNum";

const ClinicalMeasurements = ({ title, formData, setFormData }) => {

    return (
        <ContainerForm title={title}>
            <TypeNum
                num={formData.systolicBP}
                setNum={setFormData}
                inputId="systolicBP"
                label="Pression artérielle systolique"
                min={90}
                max={180}
                step={0.01}
                description="Pression artérielle systolique, comprise entre 90 et 180 mmHg"
            />
            <TypeNum
                num={formData.diastolicBP}
                setNum={setFormData}
                inputId="diastolicBP"
                label="Pression artérielle diastolique"
                min={60}
                max={120}
                step={0.01}
                description="Pression artérielle diastolique, comprise entre 60 et 120 mmHg"
            />
            <TypeNum
                num={formData.cholesterolTotal}
                setNum={setFormData}
                inputId="cholesterolTotal"
                label="Taux de cholestérol total"
                min={150}
                max={300}
                step={0.01}Pression
                description="Taux de cholestérol total, compris entre 150 et 300 mg/dL"
            />
            <TypeNum
                num={formData.cholesterolLDL}
                setNum={setFormData}
                inputId="cholesterolLDL"
                label="Taux de cholestérol LDL"
                min={50}
                max={200}
                step={0.01}
                description="Taux de cholestérol des lipoprotéines de basse densité, compris entre 50 et 200 mg/dL"
            />
            <TypeNum
                num={formData.cholesterolHDL}
                setNum={setFormData}
                inputId="cholesterolHDL"
                label="Taux de cholestérol HDL"
                min={20}
                max={100}
                step={0.01}
                description="Taux de cholestérol des lipoprotéines de haute densité, compris entre 20 et 100 mg/dL"
            />
            <TypeNum
                num={formData.cholesterolTriglycerides}
                setNum={setFormData}
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