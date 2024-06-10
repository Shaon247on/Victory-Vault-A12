import { useState } from "react";

const ButtonOutline = ({ text, onClick, icon, style }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <button
            onMouseEnter={() => setToggle(false)}
            onMouseLeave={() => setToggle(true)}            
            onClick={onClick}
            className={`${style} px-6 py-4 text-black dark:text-white border-2 border-[#3158ef] hover:border-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out rounded-md flex items-center gap-2`}
        >{icon}
            {text}
        </button>
    );
};

export default ButtonOutline;