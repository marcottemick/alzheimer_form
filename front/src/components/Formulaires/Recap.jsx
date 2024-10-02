import RecapContainer from "./ContainerRecap";

const Recap = ({ dataSelect, formData, title }) => {

    const unknownValue = (key, value) => {
        let changeValue = value === "" ? "Pas de valeur" : value
        changeValue = dataSelect[key].options && changeValue !== "Pas de valeur" ? dataSelect[key].optionsEqual[value] : changeValue
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