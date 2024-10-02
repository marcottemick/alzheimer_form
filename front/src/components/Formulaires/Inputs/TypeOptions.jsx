import ContainerInput from "./ContainerInput";

const TypeOptions = ({ options, option, setOption, inputId, label, description }) => {
    return (
        <ContainerInput label={label} description={description}>
            <select
                className="w-72 text-center"
                id={inputId}
                name={inputId}
                value={option}
                onChange={setOption}>
                <option value="" disabled>Sélection</option>
                {options.map(option =>
                    <option value={Object.keys(option)} key={Object.keys(option)}>{Object.values(option)}</option>)}
            </select>
        </ContainerInput >
    );
};

export default TypeOptions;