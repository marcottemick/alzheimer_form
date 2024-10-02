const ContainerInput = ({ children, inputId, label, description }) => {
    return (
        <div className="w-96 h-32 mx-6 my-12 p-2 bg-blue-200 rounded-md">
            <label htmlFor={inputId}>
                <p className="font-bold">{label}</p>
                <p className="text-center">{description}</p>
                <div className="flex justify-center items-center mt-5">
                    {children}
                </div>
            </label>
        </div>
    );
};

export default ContainerInput;