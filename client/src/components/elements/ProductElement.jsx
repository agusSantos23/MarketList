import Deletebtn from "../common/Deletebtn.jsx"

import arrowDownSVG from "../../assets/svg/common/arrowDown.svg"
import labelSVG from "../../assets/svg/main/label.svg"
import coinSVG from "../../assets/svg/product/coin.svg"
import businessSVG from "../../assets/svg/product/business.svg"
import bagSVG from "../../assets/svg/product/bag.svg"

import { useState } from "react"


const ProductElement = () => {

  const [ isOpen , setIsOpen ] = useState(false)


  const handleMenu = () => setIsOpen(!isOpen)


  return (
    <div className="py-2 px-3 border-4 border-green-400 rounded-md">
      
      <div 
        className="flex justify-around items-center"
        onClick={handleMenu}
      >
        <img 
          src={arrowDownSVG} 
          alt="arrow" 
          
        />

        <h3 
          className="text-xl"
        >Magdalenas</h3>

        <Deletebtn width="30px" />
      </div>

      <div className={`${isOpen ? "block" : "hidden"} mt-5 grid grid-cols-2 grid-rows-2 gap-3`}>
        <span className="flex justify-start items-center gap-2">
          <img 
            src={labelSVG} 
            alt="label"
            className="w-5 h-5" 
          />
          <h4>Magdalenas</h4>
        </span>

        <span className="flex justify-end items-center gap-2">
          <h4>200G</h4>
          <img 
            src={bagSVG} 
            alt="bag"
            className="w-5 h-5" 
          />
        </span>

        <span className="flex justify-start items-center gap-2">
          <img 
            src={businessSVG} 
            alt="business"
            className="w-5 h-5" 
          />
          <h4>Marca</h4>

        </span>

        <span className="flex justify-end items-center gap-2">
          <input 
            type="number" 
            value={9999.99}  
            className="w-20 h-6 px-2 py-0 bg-myWhite border-b text-lg text-right"
          />
          <img 
            src={coinSVG} 
            alt="cash"
            className="w-5 h-5" 
          />
        </span>

      </div>
    </div>
  )
}

export default ProductElement
