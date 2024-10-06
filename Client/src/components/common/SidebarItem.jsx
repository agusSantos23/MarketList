import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const SidebarItem = ({key}) => {
  const { t } = useTranslation()

  return (
    <div>
      <img src="" alt="" />
      <Link to={`/${key}`}>{t(`lobby.layout.sectionOne.${key}`)}</Link>
    </div>
  )
}

SidebarItem.propTypes = {
  key: PropTypes.string.isRequired
}


export default SidebarItem
