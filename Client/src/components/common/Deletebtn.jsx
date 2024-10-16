import PropTypes from "prop-types"

const Deletebtn = ({ width, setActivated }) => {
  
  return (
    

    <svg 
      fill="#ef4444"
      className="hover:scale-125"
      onClick={setActivated}
      style={{ 
        width, 
        height: "100%",
        
      }} 
      viewBox="0 0 32 32" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.771 8.518c-1.144 0.215-2.83 2.171-2.086 2.915l4.573 4.571-4.573 4.571c-0.915 0.915 1.829 3.656 2.744 2.742l4.573-4.571 4.573 4.571c0.915 0.915 3.658-1.829 2.744-2.742l-4.573-4.571 4.573-4.571c0.915-0.915-1.829-3.656-2.744-2.742l-4.573 4.571-4.573-4.571c-0.173-0.171-0.394-0.223-0.657-0.173v0zM16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25z"
      />
    </svg>

  );
}

Deletebtn.propTypes = {
  width: PropTypes.string,
  setActivated: PropTypes.func.isRequired,
}

export default Deletebtn
