import ContainerInput from "./ContainerInput";

const TypeText = ({ text, setText, inputId, label, description }) => {
    return (
        <ContainerInput inputId={inputId} label={label} description={description}>
            <input
                className="w-72 text-center"
                type="text"
                name={inputId}
                id={inputId}
                value={text}
                onChange={setText} />
        </ContainerInput>
    );
};

export default TypeText;