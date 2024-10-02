import ContainerInput from "./ContainerInput";

const TypeOptions = ({ options, option, setOption, idInput, label, description }) => {
    return (
        <ContainerInput label={label} description={description}>
            <select
                className="w-72 text-center"
                id={idInput}
                name={idInput}
                value={option}
                onChange={e => setOption(e.target.value)}>
                <option value="" disabled>Sélection</option>
                {options.map(option =>
                    <option value={Object.keys(option)} key={Object.keys(option)}>{Object.values(option)}</option>)}
            </select>
        </ContainerInput >
    );
};

export default TypeOptions;