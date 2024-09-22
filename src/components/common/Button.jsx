import PropTypes from 'prop-types';

const Button = ({ content }) => {
  return (
    <button 
      type="submit"
      className="w-32 py-1 border-2 border-gray-200 rounded-md shadow-md text-lg text-center text-gray-600 font-lilita"
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
