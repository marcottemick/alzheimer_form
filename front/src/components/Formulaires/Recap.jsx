import RecapContainer from "./ContainerRecap";

const Recap = ({ dataSelect, formData, title }) => {

    const unknownValue = (key, value) => {
        console.log(key, value)
        console.log(dataSelect[key].type)
        let changeValue = value[0] === "" ? "Pas de valeur" : value[0]
        changeValue = dataSelect[key].type === "options" && changeValue !== "Pas de valeur" ? dataSelect[key].optionsEqual[changeValue] : changeValue
        changeValue = changeValue !== "Pas de valeur" && dataSelect[key].unity !== null ? changeValue + dataSelect[key].unity : changeValue
        return changeValue
    };

    return (
        <RecapContainer>
            <div className="font-bold text-center">
                {title}
            </div>
            <table className="w-full">
                {Object.keys(dataSelect).map(key =>
                    <tr key={key}>
                        <td>{dataSelect[key].name}</td>
                        <td>{unknownValue(key, formData[key])}</td>
                    </tr>
                )}

            </table>
        </RecapContainer>
    );
};

export default Recap;