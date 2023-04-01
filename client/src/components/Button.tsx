

const Button = ({children}:{
    children:String
}) => {
    return (
        <button className=" px-4 py-2 text-white uppercase font-semibold">
            {children}
        </button>
    );
};

export default Button;