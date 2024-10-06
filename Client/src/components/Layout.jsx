import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useAuth } from '../context/AuthContext.jsx'

import SidebarItem from "./common/SidebarItem.jsx";

import closeSVG from '../assets/svg/common/close.svg'

const Layout = ({ isVisible, hanleVisible }) => {

  const { t } = useTranslation()
  const { logout, user } = useAuth()


  if (isVisible) {
    return (
      <>
        <aside className="fixed top-0 left-0 py-7 px-3 flex flex-col justify-between font-quicksand bg-myWhite border-r-8 shadow-2xl shadow-blue-700 border-r-blue-200 w-4/5 h-svh z-50">
          

          <main
            className="flex flex-col gap-16" 
          >
            <div className="flex items-center gap-3"> 
              <img 
                src={closeSVG} 
                alt="close" 
                onClick={hanleVisible}
                className="w-7 stroke-red-500 "  
              />
              <span className="w-56 text-center text-green-500 border-2 border-green-500 p-1 rounded-lg">{user.username}</span>
            </div>
            <section className="ml-3 text-xl flex flex-col gap-4">

              <SidebarItem itemKey={"labels"} />
              <SidebarItem itemKey={"markets"} />
              <SidebarItem itemKey={"products"} />

              <LanguageSwitcher />
            </section>
            
              
              

            <button 
              onClick={logout}
              className="ml-3 w-36 py-1 font-lilita border-2 border-red-400 shadow-md hover:shadow-red-400"
            >{t("lobby.layout.logout")}</button>
            
            
          </main>
          <footer className="flex justify-center items-center">
            <h3 
              className="text-center w-56 py-1 border-2 rounded-md border-orange-400 shadow-xl"
            >{t("footer")} Agu<span className="text-orange-400">SS</span>antos</h3>
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
