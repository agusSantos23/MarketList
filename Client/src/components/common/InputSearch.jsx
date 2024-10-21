import PropTypes from "prop-types";

import hashtagSVG from '../../assets/svg/common/hashtag.svg'

const NameSearch = ({ onSearch, size}) => {
  return (
    <div className="relative w-auto ">
      <img 
        src={hashtagSVG} 
        alt="hashtag" 
        className={`${size === "sm" ? "w-4" : "w-7"} absolute left-2 top-1/2 -translate-y-1/2`}  
      />
      <input 
        type="text"
        onChange={onSearch}
        className={`${size === "sm" ? "pl-7" : "pl-10"} pr-1 ${size !== "sm" && "py-2"} text-lg bg-myWhite rounded-md border-2 border-purple-300 shadow-md shadow-purple-300 focus:outline-none focus:border-transparent `}
      />
    </div>
  );
}

NameSearch.propTypes = {
  onSearch: PropTypes.func.isRequired, 
  size: PropTypes.string
};
export default NameSearch
