import TypeNum from "./components/Formulaires/Inputs/TypeNum"
import TypeOptions from "./components/Formulaires/Inputs/TypeOptions"
import TypeRadio from "./components/Formulaires/Inputs/TypeRadio";
import TypeText from "./components/Formulaires/Inputs/TypeText"

const optionsDemoDetail = {
    "Gender": [{ "0": "Homme" }, { "1": "Femme" }],
    "Ethnicity": [{ "0": "Caucasien" }, { "1": "Subsaharienne" }, { "2": "Asiatique" }, { "3": "Autre" }],
    "EducationLevel": [{ "0": "Collège" }, { "1": "Lycée" }, { "2": "bac+2/+3" }, { "3": "sup à bac+3" }]
}

export const inputSelect = (key, obj, formData, setFormData) => {
    console.log(key, obj)
    if (obj.type === "text") {
        return <TypeText
            text={formData[key]}
            setText={setFormData}
            inputId={key}
            label={obj.label}
            description={obj.description}
        />
    }
    else if (obj.type === "num") {
        return <TypeNum
            num={formData[key]}
            setNum={setFormData}
            inputId={key}
            label={obj.label}
            min={obj.min}
            max={obj.max}
            step={obj.step}
            description={obj.description}
        />
    }
    else if (obj.type === "options") {
        return <TypeOptions
            options={optionsDemoDetail[key]}
            option={formData[key]}
            setOption={setFormData}
            inputId={key}
            label={obj.label}
            description={obj.description}
        />
    }
    else if (obj.type === "radio") {
        return <TypeRadio
            radio={formData[key]}
            setRadio={setFormData}
            inputId={key}
            label={obj.label}
            description={obj.description}
        />
    }
};
