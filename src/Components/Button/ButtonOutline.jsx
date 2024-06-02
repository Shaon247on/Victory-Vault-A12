import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonOutline = ({ text, onClick }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <button 
            onMouseEnter={() => setToggle(false)} 
            onMouseLeave={() => setToggle(true)} 
            onClick={onClick} 
            className={`px-6 py-4 text-black border-2  border-[#3158ef] hover:border-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md flex items-center gap-2`}
        >
            <span className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${toggle ? 'order-1' : 'order-2'}`}>
                {text}
            </span>
            <FaArrowRight className={`transition-all duration-500 ease-in-out ${toggle ? 'order-2' : 'order-1'}`} />
        </button>
    );
};

export default ButtonOutline;