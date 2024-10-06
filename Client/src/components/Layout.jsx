import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../context/AuthContext.jsx'

import closeSVG from '../assets/svg/common/close.svg'

const Layout = ({ isVisible, hanleVisible }) => {

  const { t } = useTranslation()
  const { logout, user } = useAuth()


  if (isVisible) {
    return (
      <>
        <aside className="fixed top-0 left-0 py-7 px-3 flex flex-col justify-between bg-myWhite border-r-8 shadow-2xl shadow-blue-700 border-r-blue-200 w-4/5 h-svh z-50">
          

          <main
            className="flex flex-col gap-9" 
          >
            <div className="flex items-center"> 
              <img 
                src={closeSVG} 
                alt="close" 
                onClick={hanleVisible}
                className="w-7 stroke-red-500 "  
              />
              <h1 className="text-lg pl-4">{t("lobby.layout.h1")} <span className="text-green-500 border-2 border-green-500 p-1 rounded-lg">{user.username}</span></h1>
            </div>
            <section className="text-xl flex flex-col">
              <Link to="/labels">{t("lobby.layout.sectionOne.labels")}</Link> 
              <Link to="/markets">{t("lobby.layout.sectionOne.markets")}</Link>
              <Link to="/products">{t("lobby.layout.sectionOne.products")}</Link>
            </section>
            <section className="text-xl">
              <Link to="/list">{t("lobby.layout.sectionTwo.shoppingList")}</Link> 
              <button onClick={logout}>{t("lobby.layout.sectionTwo.logout")}</button>
            </section>
            
          </main>
          <footer>
            <h3 className="text-center">{t("footer")}</h3>
          </footer>
        </aside>
        <div 
          className="fixed top-0 right-0 w-screen h-screen z-40 bg-black opacity-30"
          onClick={hanleVisible}
        ></div>
      </>  
    );

  } else {
    return <></>;
  }
};

Layout.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hanleVisible: PropTypes.func
};

export default Layout;
