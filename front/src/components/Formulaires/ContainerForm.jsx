const ContainerForm = (props) => {
    return (
        <div className="rounded-md shadow-lg" style={{minWidth: "80vw", height: "70vh"}}>
            {props.children}
        </div>
    );
};

export default ContainerForm