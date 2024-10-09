
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Deletebtn from "../common/Deletebtn.jsx"

const MarketElement = ({name, colorHexa, setActivatedDelete}) => {

  return (
    <div className="flex items-center gap-6">
      <Deletebtn width="40px" setActivated={setActivatedDelete}/>

      <Link to={`/mercadona?market=${name}`}>
        <div 
          className={`w-64 py-3 border-4 rounded-md shadow-lg`}
          style={{ borderColor: colorHexa }}
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
