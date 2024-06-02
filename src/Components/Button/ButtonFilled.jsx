import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonFilled = ({ text = 'hello', beforeColor = "[#3158ef]", hoverColor = '[#b765e7]', onClick }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <button 
            onMouseEnter={() => setToggle(false)} 
            onMouseLeave={() => setToggle(true)} 
            onClick={onClick} 
            className={`px-6 py-4 text-white bg-${beforeColor} hover:bg-${hoverColor} font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md flex items-center gap-2`}
        >
            <span className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${toggle ? 'order-1' : 'order-2'}`}>
                {text}
            </span>
            <FaArrowRight className={`transition-all duration-500 ease-in-out ${toggle ? 'order-2' : 'order-1'}`} />
        </button>
    );
};

export default ButtonFilled;
