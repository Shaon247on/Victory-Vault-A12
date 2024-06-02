import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonFilled = ({ text = 'hello', onClick, style, icon, disable }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <button
            disabled
            onMouseEnter={() => setToggle(false)}
            onMouseLeave={() => setToggle(true)}
            onClick={onClick}
            className={`${style} justify-center px-6 py-4 text-white bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md items-center gap-2`}
        >
            {icon}
            {text}
        </button>
    );
};

export default ButtonFilled;
