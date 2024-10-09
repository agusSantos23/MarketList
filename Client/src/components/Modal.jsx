import { useEffect } from "react";

import PropTypes from "prop-types"


const Modal = ({isOpen, handleVisible ,children}) => {

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

  }, [isOpen]);
  
  
  if(!isOpen) return null

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-svw h-svh bg-black opacity-30 z-20"
        onClick={handleVisible}
      >
        
      </div>
      <div className=" w-5/6 h-max px-4 py-5 bg-white border-4 rounded-lg border-myGray fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {children}
      </div>
    </>
    
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleVisible: PropTypes.func,
  children: PropTypes.node.isRequired

}

export default Modal
