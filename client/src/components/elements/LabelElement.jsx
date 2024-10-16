import { useState } from "react";
import PropTypes from 'prop-types';

import CheckBoxList from "../common/form/CheckBoxList.jsx";
import Deletebtn from "../common/Deletebtn.jsx";

import arrowDownSVG from "../../assets/svg/common/arrowDown.svg"


const LabelElement = ({name,emoji,setActivatedDelete}) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleMenu = () => setIsOpen(!isOpen)

  return (
    <div> 
      <div className="flex gap-5 items-center">

        <Deletebtn width="38px" setActivated={setActivatedDelete}/>

        <div
          onClick={handleMenu}
          className="relative flex items-center w-full gap-3 pl-3 py-2 border-4 rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-md shadow-gray-400" 
        >
          <img 
            src={arrowDownSVG} 
            alt="arrowDownSVG" 
            className={`duration-300 ease-in-out ${isOpen && "rotate-180"}`}
          />
          
          <h2 className="text-2xl text-myBlack">{name}</h2>

          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl">{emoji}</span>
        </div>
      </div>

      <div className={`overflow-hidden duration-500 ${isOpen ? 'animate-open' : 'animate-close'}`}>

        {isOpen && ( 

          <div className={`${isOpen ? 'block' : 'hidden'} mt-4 flex flex-col gap-3`}> 

            <div className="flex items-center gap-5 ml-5">
              <CheckBoxList/>

              <div className="flex flex-col gap-2 w-full px-4 py-2 border-2 border-t-green-400 border-l-green-400 border-b-green-500 border-r-green-500 border-gray-300 rounded-md shadow-md shadow-green-200">

                <div className="flex justify-between">
                  <h3>Mercadona</h3>
                  <span className="font-bold text-green-500">2 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">1/2 Kg</span>
                  <span className="text-sm">Manzanero</span>
                </div>
              </div>
            </div>


          </div>
        )}
      </div>
    </div>
  )
}

LabelElement.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  setActivatedDelete: PropTypes.func.isRequired,
}

export default LabelElement
