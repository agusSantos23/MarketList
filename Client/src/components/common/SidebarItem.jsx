import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";


import labelSVG from '../../assets/svg/main/label.svg'
import marketSVG from '../../assets/svg/main/market.svg'
import productSVG from '../../assets/svg/main/product.svg'



const SidebarItem = ({itemKey}) => {
  const { t } = useTranslation()


  const [icon, setIcon] = useState(null)
  const [style, setStyle] = useState(null)

  useEffect(() => {
    switch (itemKey) {
      case 'labels':
        setIcon(labelSVG);
        setStyle('border-violet-400 w-40 hover:shadow-violet-400')
        break;
      case 'markets':
        setIcon(marketSVG);
        setStyle('border-yellow-400 w-44 hover:shadow-yellow-400')
        break;
      
      case 'products':
        setIcon(productSVG);
        setStyle('border-green-400 w-48 hover:shadow-green-400')
        break;
      default:
        setIcon(null); 
    }
  }, [itemKey]);

  return (
    <div className={`px-2 py-1 flex gap-4 items-center border-2 shadow-lg rounded-md ${style} `}>
      <img 
        src={icon} 
        alt={`icon ${itemKey}`} 
        className="w-7"
      />
      <Link to={`/${itemKey}`}>{t(`lobby.layout.section.${itemKey}`)}</Link>
    </div>
  )
}

SidebarItem.propTypes = {
  itemKey: PropTypes.string.isRequired
}


export default SidebarItem
