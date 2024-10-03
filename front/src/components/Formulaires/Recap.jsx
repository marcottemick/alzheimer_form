import RecapContainer from "./ContainerRecap";

const Recap = ({ dataSelect, formData, title }) => {

    /** Modifie les valeurs numériques par leur équivalent en résultat
     * @param {String} key 
     * @param {String} value 
     * @returns 
     */
    const unknownValue = (key, value) => {
        let changeValue = value[0] === "" ? "Pas de valeur" : value[0]
        changeValue = (dataSelect[key].type === "options" || dataSelect[key].type === "radio") && changeValue !== "Pas de valeur" ? dataSelect[key].optionsEqual[changeValue] : changeValue
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