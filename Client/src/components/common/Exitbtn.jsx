import { useNavigate } from 'react-router-dom';

import closeSVG from "../../assets/svg/common/close.svg"

const Exitbtn = () => {

  const navigate = useNavigate()

  return (
    <>
      <img
        onClick={() =>{navigate("/")}}
        className="w-6"
        src={closeSVG} 
        alt="close" 
      />
    </>
  )
}

export default Exitbtn
