import ContainerInput from "./ContainerInput";

/**Input de type "radio" pour choix de deux types*/
const TypeRadio = ({ radio, setRadio, inputId, label, description }) => {
    return (
        <ContainerInput inputId={inputId} label={label} description={description}>
            <div className="w-72 flex justify-around items-center bg-white">
                <div className="flex">
                    <input
                        type="radio"
                        name={inputId}
                        value="0"
                        checked={radio[0] === "0"}
                        onChange={setRadio}
                    />
                    <p className="ml-4">NON</p>
                </div>
                <div className="flex">
                    <input
                        type="radio"
                        name={inputId}
                        value="1"
                        checked={radio[0] === "1"}
                        onChange={setRadio}
                    />
                    <p className="ml-4">OUI</p>
                </div>
            </div>
        </ContainerInput>
    );
};

export default TypeRadio;