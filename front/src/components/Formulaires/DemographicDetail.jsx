import { useState } from "react";
import ContainerForm from "./ContainerForm";
import TypeText from "./Inputs/TypeText";
import TypeNum from "./Inputs/TypeNum";
import TypeOptions from "./Inputs/TypeOptions";

const DemographicDetail = ({ title }) => {
    const [firstName, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("")
    const [ethnicity, setEthnicity] = useState("");
    const [educationLevel, setEducationLevel] = useState("")

    const optionsDemoDetail = {
        "gender": [{ "0": "Homme" }, { "1": "Femme" }],
        "ethnicity": [{ "0": "Caucasien" }, { "1": "Subsaharienne", }, { "2": "Asiatique" }, { "3": "Autre" }],
        "educationLevel": [{ "0": "Collège" }, { "1": "Lycée" }, { "2": "bac+2/+3" }, { "3": "sup à bac+3" }]
    }

    return (
        <ContainerForm title={title}>
            <TypeText
                text={firstName}
                setText={setFirstName}
                idInput="firstName"
                label="Prénom"
                description="Indiquer le prénom du patient"
            />
            <TypeText
                text={name}
                setText={setName}
                idInput="name"
                label="Nom"
                description="Indiquer le nom du patient"
            />
            <TypeNum
                num={age}
                setNum={setAge}
                idInput="age"
                label="Âge"
                min={60}
                max={90}
                step={1}
                description="Indiquer l'âge du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.gender}
                option={gender}
                setOption={setGender}
                idInput="gender"
                label="Sexe"
                description="Indiquer le sexe du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.ethnicity}
                option={ethnicity}
                setOption={setEthnicity}
                idInput="ethnicity"
                label="Ethnicité"
                description="Sélectionner l'ethnicité du patient"
            />
            <TypeOptions
                options={optionsDemoDetail.educationLevel}
                option={educationLevel}
                setOption={setEducationLevel}
                idInput="educationLevel"
                label="Niveau d'éducation"
                description="Sélectionner le niveau d'étude du patient"
            />
        </ContainerForm>
    );
};

export default DemographicDetail;