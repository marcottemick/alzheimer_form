/** Container d'affichage des formulaires */
const ContainerForm = ({ children, title }) => {
    return (
        <div
            className="rounded-md shadow-lg bg-gray-100 h-fit w-[60vw]">
            <div className="flex justify-center items-center bg-blue-400 h-20 font-bold text-3xl rounded-t-md">
                {title}
            </div>
            <div className="flex justify-around items-center flex-wrap h-full">
                {children}
            </div>
        </div>
    );
};

export default ContainerForm