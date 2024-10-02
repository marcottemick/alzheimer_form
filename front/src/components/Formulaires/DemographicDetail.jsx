import ContainerForm from "./ContainerForm";
import TypeText from "./Inputs/TypeText";
import TypeNum from "./Inputs/TypeNum";
import TypeOptions from "./Inputs/TypeOptions";

const DemographicDetail = ({ title, formData, setFormData }) => {

    const optionsDemoDetail = {
        "gender": [{ "0": "Homme" }, { "1": "Femme" }],
        "ethnicity": [{ "0": "Caucasien" }, { "1": "Subsaharienne" }, { "2": "Asiatique" }, { "3": "Autre" }],
        "educationLevel": [{ "0": "Collège" }, { "1": "Lycée" }, { "2": "bac+2/+3" }, { "3": "sup à bac+3" }]
    }

    return (
        <ContainerForm title={title}>
            <TypeText
                text={formData.firstName}
                setText={setFormData}
                inputId="firstName"
                label="Prénom"
                description="Indiquer le prénom du patient"
            />
            <TypeText
                text={formData.name}
                setText={setFormData}
                inputId="name"
                label="Nom"
                description="Indiquer le nom du patient"
            />
            <TypeNum
                num={formData.age}
                setNum={setFormData}
                inputId="age"
                label="Âge"
                min={60}
                max={90}
                step={1}
                description="Indiquer l'âge du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.gender}
                option={formData.gender}
                setOption={setFormData}
                inputId="gender"
                label="Sexe"
                description="Indiquer le sexe du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.ethnicity}
                option={formData.ethnicity}
                setOption={setFormData}
                inputId="ethnicity"
                label="Ethnicité"
                description="Sélectionner l'ethnicité du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.educationLevel}
                option={formData.educationLevel}
                setOption={setFormData}
                inputId="educationLevel"
                label="Niveau d'étude"
                description="Sélectionner le niveau d'étude du patient"
            />
        </ContainerForm>
    );
};

export default DemographicDetail;