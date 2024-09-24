import PropTypes from 'prop-types';

const Button = ({ content }) => {
  return (
    <button 
      type="submit"
      className="w-32 py-1 border-2 border-green-400 bg-green-400 tracking-wider text-gray-50 rounded-md shadow-md text-lg text-center font-lilita hover:bg-myWhite hover:text-myBlack duration-150 ease-in"
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
