import PropTypes from "prop-types";

import hashtagSVG from '../../assets/svg/common/hashtag.svg'

const NameSearch = ({ onSearch }) => {


  return (
    <div className="relative w-auto ">
      <img 
        src={hashtagSVG} 
        alt="hashtag" 
        className="w-7 absolute left-2 top-1/2 -translate-y-1/2"  
      />

      <input 
        type="text"
        onChange={onSearch}
        className="pl-10 pr-1 py-2 text-lg bg-myWhite rounded-md border-2 border-purple-300 border-t-purple-200 border-l-purple-200 border-b-purple-400 border-r-purple-400 shadow-lg shadow-purple-300 focus:outline-none focus:border-transparent "
      />
    </div>
    
  )
}

NameSearch.propTypes = {
  onSearch: PropTypes.func.isRequired, 
};
export default NameSearch
