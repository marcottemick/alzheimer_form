import ContainerInput from "./ContainerInput";

const TypeNum = ({num, setNum, inputId, label, description, min, max, step}) => {
    return(
        <ContainerInput inputId={inputId} label={label} description={description}> 
            <input 
            className="w-72 text-center"
            type="number" 
            name={inputId} 
            id={inputId}
            value={num}
            onChange={setNum}
            min={min}
            max={max}
            step={step} />
        </ContainerInput>
    );
};

export default TypeNum;