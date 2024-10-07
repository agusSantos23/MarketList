
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Deletebtn from "../common/Deletebtn.jsx"

const MarketElement = ({name, color}) => {


  return (
    <div className="flex items-center gap-6">
      <Link to={`/mercadona?market=${name}`}>
        <div className={`w-64 py-3 border-4 border-${color} rounded-md shadow-lg`}>
          <h3 className={`text-xl text-center `}>{name}</h3>
        </div>
      </Link>

      <Deletebtn width="40px"/>
    </div>
  )
}

MarketElement.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default MarketElement
