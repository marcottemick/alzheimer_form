const ContainerError = ({ errorMessage }) => {
    return (
        <div
            className="bg-gray-100 rounded-md"
            style={{ maxWidth: "60vw", minWidth: "60vw" }}>
            <div className="bg-red-500 h-12 rounded-t-md flex justify-center items-center font-bold text-4xl">
                <p>Error</p>
            </div>
            <div className="flex justify-center items-center h-24 font-bold text-xl">
                {errorMessage}
            </div>
            <div className="bg-red-500 h-12 rounded-b-md"></div>
        </div>
    );
};

export default ContainerError