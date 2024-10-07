import PropTypes from "prop-types"

const Deletebtn = ({ width }) => {
  return (
    <svg
      className="hover:scale-125"
      style={{ width, height: "100%" }} 
      viewBox="6 6 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <line 
        x1="7" 
        y1="12" 
        x2="17" 
        y2="12" 
        stroke="#ef4444" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}






Deletebtn.propTypes = {
  width: PropTypes.string
}

export default Deletebtn
