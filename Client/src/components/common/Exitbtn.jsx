import { useNavigate } from 'react-router-dom';

import closeSVG from "../../assets/svg/common/close.svg"

const Exitbtn = () => {

  const navigate = useNavigate()

  return (
    <>
      <img
        onClick={() =>{navigate("/lobby")}}
        className="w-8"
        src={closeSVG} 
        alt="close" 
      />
    </>
  )
}

export default Exitbtn
