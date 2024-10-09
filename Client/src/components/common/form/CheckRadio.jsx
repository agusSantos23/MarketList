import PropTypes from "prop-types";

const CheckRadio = ({ color, selectedValue, handleColorChange }) => {
  return (
    <label className="relative flex items-center justify-center cursor-pointer">
      <input 
        type="radio" 
        name="color" 
        value={color}
        checked={selectedValue === color}
        onChange={() => handleColorChange(color)}
        className="sr-only peer"
      />
      <div
        className={`w-8 h-8 rounded-full border-4`}
        style={{ borderColor: color }}
      ></div>

      <div
        className={`absolute w-4 h-4 rounded-full scale-0 peer-checked:scale-100 transition-transform`}
        style={{ background: color }}
      ></div>
    </label>
  );
};


CheckRadio.propTypes = {
  color: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired
}

export default CheckRadio
