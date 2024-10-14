/**Container d'affichage de la récapitulation des données */
const RecapContainer = ({ children }) => {
    return (
        <div
            className="rounded-md bg-blue-200 w-80 px-2 py-2 my-2">
            {children}
        </div>
    );
};

export default RecapContainer