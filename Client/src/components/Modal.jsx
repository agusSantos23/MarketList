import PropTypes from "prop-types"

const Modal = ({isOpen, hanleVisible ,children}) => {

  if(!isOpen) return null


  return (
    <>
      <div 
        className="absolute top-0 left-0 w-svw h-svh bg-black opacity-30 z-20"
        onClick={hanleVisible}
      >
        
      </div>
      <div className=" w-5/6 h-max px-4 py-5 bg-white border-4 rounded-lg border-myGray absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        {children}
      </div>
    </>
    
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hanleVisible: PropTypes.func,
  children: PropTypes.node.isRequired

}

export default Modal
