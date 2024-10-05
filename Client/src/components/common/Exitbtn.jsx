import { useNavigate } from 'react-router-dom';

import close from "../../assets/svg/common/close.svg"

const Exitbtn = () => {

  const navigate = useNavigate()

  return (
    <>
      <img
        onClick={() =>{navigate("/")}}
        className="w-10"
        src={close} 
        alt="close" 
      />
    </>
  )
}

export default Exitbtn
