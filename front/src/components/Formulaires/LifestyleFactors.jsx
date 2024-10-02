import ContainerForm from "./ContainerForm";
import TypeNum from "./Inputs/TypeNum";
import TypeRadio from "./Inputs/TypeRadio";

const LifestyleFactors = ({ title, formData, setFormData }) => {
    return (
        <ContainerForm title={title}>
            <TypeNum
                num={formData.BMI}
                setNum={setFormData}
                inputId="BMI"
                label="IMC"
                min={15}
                max={40}
                step={0.01}
                description="Indiquer l'indice de masse corporel du patient"
            />
            <TypeRadio
                radio={formData.smoking}
                setRadio={setFormData}
                inputId="smoking"
                label="Tabagisme"
                description="Sélectionner si le patient fume (oui ou non)"
            />
            <TypeNum
                num={formData.alcohol}
                setNum={setFormData}
                inputId="alcohol"
                label="Alcoolémie"
                min={0}
                max={20}
                step={0.01}
                description="Indiquer le volume d'alcool consommé par semaine"
            />
            <TypeNum
                num={formData.physicalAct}
                setNum={setFormData}
                inputId="physicalAct"
                label="Activité physique"
                min={0}
                max={10}
                step={0.1}
                description="Indiquer le nombre d'heure d'activité physique entre 0 et 10"
            />
            <TypeNum
                num={formData.dietQuality}
                setNum={setFormData}
                inputId="dietQuality"
                label="Qualité de l'alimentation"
                min={0}
                max={10}
                step={1}
                description="Indiquer le score de qualité de l'alimentation entre 0 et 10"
            />
            <TypeNum
                num={formData.sleepQuality}
                setNum={setFormData}
                inputId="sleepQuality"
                label="Qualité du sommeil"
                min={4}
                max={10}
                step={0.01}
                description="Indiquer le score de qualité du sommeil entre 4 et 10"
            />
        </ContainerForm>
    );
};

export default LifestyleFactors;