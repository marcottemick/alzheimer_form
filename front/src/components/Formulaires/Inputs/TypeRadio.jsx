import ContainerInput from "./ContainerInput";

const TypeRadio = ({ radio, setRadio, inputId, label, description }) => {
    return (
        <ContainerInput inputId={inputId} label={label} description={description}>
            <div className="w-72 flex justify-around items-center bg-white">
                <div className="flex">
                    <input
                        type="radio"
                        name="radioValue"
                        value="0"
                        checked={radio === "0"}
                        onChange={e => setRadio(e.target.value)}
                    />
                    <p className="ml-4">OUI</p>
                </div>
                <div className="flex">
                    <input
                        type="radio"
                        name="radioValue"
                        value="1"
                        checked={radio === "1"}
                        onChange={e => setRadio(e.target.value)}
                    />
                    <p className="ml-4">NON</p>
                </div>
            </div>
        </ContainerInput>
    );
};

export default TypeRadio;