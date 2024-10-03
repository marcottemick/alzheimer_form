import ContainerForm from "./ContainerForm";
import TypeText from "./Inputs/TypeText";
import TypeNum from "./Inputs/TypeNum";
import TypeOptions from "./Inputs/TypeOptions";

const DemographicDetail = ({ title, formData, setFormData }) => {

    const optionsDemoDetail = {
        "Gender": [{ "0": "Homme" }, { "1": "Femme" }],
        "Ethnicity": [{ "0": "Caucasien" }, { "1": "Subsaharienne" }, { "2": "Asiatique" }, { "3": "Autre" }],
        "EducationLevel": [{ "0": "Collège" }, { "1": "Lycée" }, { "2": "bac+2/+3" }, { "3": "sup à bac+3" }]
    }

    return (
        <ContainerForm title={title}>
            <TypeText
                text={formData.FirstName}
                setText={setFormData}
                inputId="FirstName"
                label="Prénom"
                description="Indiquer le prénom du patient"
            />
            <TypeText
                text={formData.Name}
                setText={setFormData}
                inputId="Name"
                label="Nom"
                description="Indiquer le nom du patient"
            />
            <TypeNum
                num={formData.Age}
                setNum={setFormData}
                inputId="Age"
                label="Âge"
                min={60}
                max={90}
                step={1}
                description="Indiquer l'âge du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.Gender}
                option={formData.Gender}
                setOption={setFormData}
                inputId="Gender"
                label="Sexe"
                description="Indiquer le sexe du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.Ethnicity}
                option={formData.Ethnicity}
                setOption={setFormData}
                inputId="Ethnicity"
                label="Ethnicité"
                description="Sélectionner l'ethnicité du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.EducationLevel}
                option={formData.EducationLevel}
                setOption={setFormData}
                inputId="EducationLevel"
                label="Niveau d'étude"
                description="Sélectionner le niveau d'étude du patient"
            />
        </ContainerForm>
    );
};

export default DemographicDetail;