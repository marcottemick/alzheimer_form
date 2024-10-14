import ContainerInput from "./ContainerInput";

/**Input à plusieurs options */
const TypeOptions = ({ options, option, setOption, inputId, label, description }) => {
    return (
        <ContainerInput label={label} description={description}>
            <select
                className="w-72 text-center"
                id={inputId}
                name={inputId}
                value={option[0]}
                onChange={setOption}>
                <option value="" disabled>Sélection</option>
                {options.map(option =>
                    <option value={Object.keys(option)} key={Object.keys(option)}>{Object.values(option)}</option>)}
            </select>
        </ContainerInput >
    );
};

export default TypeOptions;