
import PropTypes from 'prop-types';
const Title = ({subTitle,mainTitle}) => {
    return (
        <div className='text-center'>
            <div className="badge bg-gradient-to-l from-[#3158ef] to-[#b765e7] text-white font-semibold p-4 mb-5">{subTitle}</div>
            <h1 className="text-2xl md:text-4xl font-bold mb-16 w-[300px] md:w-[500px] mx-auto">{mainTitle}</h1>
        </div>
    );
};

Title.propTypes={
    subTitle: PropTypes.string,
    mainTitle: PropTypes.string
}

export default Title;