const ContainerForm = ({ children, title }) => {
    return (
        <div
            className="rounded-md shadow-lg bg-gray-100"
            style={{ maxWidth: "80vw", minWidth: "80vw", height: "70vh" }}>
            <div className="flex justify-center items-center bg-blue-400 h-20 font-bold text-3xl rounded-t-lg">
                {title}
            </div>
            <div className="flex justify-around items-center flex-wrap h-max py-12">
                {children}
            </div>
        </div>
    );
};

export default ContainerForm