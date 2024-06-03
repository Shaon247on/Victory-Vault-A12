import PropTypes from 'prop-types';

const ButtonFilled = ({ text = 'hello', onClick, style, icon, disable }) => {
    console.log(disable);
    return (
        <button
            disabled={disable}            
            onClick={onClick}
            className={`${style} justify-center px-6 py-4 text-white ${disable? "bg-gray-400": "bg-[#3158ef] hover:bg-[#b765e7] font-semibold shadow-md hover:shadow-xl hover:translate-y-[-5px] hover:scale-105 transition duration-500 ease-in-out"}  rounded-md items-center gap-2`}
        >
            {icon}
            {text}
        </button>
    );
};

ButtonFilled.propTypes ={
    disable: PropTypes.bool,
    icon: PropTypes.element,
    text: PropTypes.string,
    style: PropTypes.string,
    onClick: PropTypes.func
}
export default ButtonFilled;
