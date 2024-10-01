const Arrow = (props) => {
    return (
        <div className="bg-blue-400 w-48 h-48 rounded-full 
        flex justify-center items-center cursor-pointer">
            {props.children}
        </div>
    );
};

export default Arrow;