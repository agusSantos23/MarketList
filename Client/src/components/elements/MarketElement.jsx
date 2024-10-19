
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Deletebtn from "../common/Deletebtn.jsx"

const colorMap = {
  '#f77272': { one: '#f77272', two: '#f04343' }, 
  '#5fa5fa': { one: '#5fa5fa', two: '#3b82f5' }, 
  '#a78cfa': { one: '#a78cfa', two: '#895bf5' }, 
  '#49de80': { one: '#49de80', two: '#21c45d' }, 
  '#facc14': { one: '#facc14', two: '#ebb207' }, 

  '#f04343': { one: '#f04343', two: '#db2525' }, 
  '#3b82f5': { one: '#3b82f5', two: '#2664eb' }, 
  '#895bf5': { one: '#895bf5', two: '#7b39ed' }, 
  '#21c45d': { one: '#21c45d', two: '#15a349' }, 
  '#ebb207': { one: '#ebb207', two: '#c98b04' }, 
};

const MarketElement = ({name, colorHexa, setActivatedDelete}) => {

  const { one: borderColor1, two: borderColor2 } = colorMap[colorHexa]

  return (
    <div className="flex items-center gap-6">
      <Deletebtn width="30px" setActivated={setActivatedDelete}/>

      <Link to={`/product?market=${name}`}>
        <div 
          className={`w-64 py-3 border-4 rounded-md`}
          style={{
            borderTopColor: borderColor1,
            borderLeftColor: borderColor1,
            borderBottomColor: borderColor2,
            borderRightColor: borderColor2,
            boxShadow: `0 0 10px 1px ${borderColor1}`,
          }}
        >
          <h3 className={`text-xl text-center `}>{name}</h3>
        </div>
      </Link>
      
    </div>
  )
}

MarketElement.propTypes = {
  name: PropTypes.string.isRequired,
  colorHexa: PropTypes.string.isRequired,
  setActivatedDelete: PropTypes.func.isRequired,
}

export default MarketElement
