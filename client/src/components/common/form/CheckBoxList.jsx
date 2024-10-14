import PropTypes from "prop-types";
import { useState } from "react";

const CheckBoxList = ({size = 45}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
      <div className="relative">
        <div 
          className={`flex items-center justify-center border-2 rounded-md bg-myWhite border-t-yellow-200 border-l-yellow-200 border-b-yellow-400 border-r-yellow-400 ${checked && "shadow-md"} duration-500 shadow-yellow-200 `}
          style={{
            width: `${size - 15}px`,
            height: `${size - 15}px`,
          }}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={`${size}px`}
              height={`${size}px`}
              viewBox="0 0 512 512"
              fill="none"
              stroke="#facc14"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            >
              <path d="M416 128L192 384l-96-96" />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
};

CheckBoxList.propTypes = {
  size: PropTypes.number
}

export default CheckBoxList;
