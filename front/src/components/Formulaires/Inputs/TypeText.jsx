import ContainerInput from "./ContainerInput";

/**Input de type "text" */
const TypeText = ({ text, setText, inputId, label, description }) => {
    return (
        <ContainerInput inputId={inputId} label={label} description={description}>
            <input
                className="w-72 text-center"
                type="text"
                name={inputId}
                id={inputId}
                value={text[0]}
                onChange={setText} />
        </ContainerInput>
    );
};

export default TypeText;