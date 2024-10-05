import PropTypes from "prop-types";

import { useTranslation } from 'react-i18next';


const Layout = ({ isVisible }) => {

  const { t } = useTranslation()


  if (isVisible) {
    return (
      <aside className="fixed top-0 left-0 py-3 px-3 bg-myWhite border-r-8 shadow-2xl shadow-blue-700 border-r-blue-200 w-2/3 h-svh z-20">
        <header>
          
          <h1>{t("lobby.layout.h1")} Paco</h1>
        </header>
        <main>
          <section>
            <a href="">{t("lobby.layout.sectionOne.labels")}</a> 
            <a href="">{t("lobby.layout.sectionOne.markets")}</a>
            <a href="">{t("lobby.layout.sectionOne.products")}</a>
          </section>
          <section>
            <a href="">{t("lobby.layout.sectionTwo.shoppingList")}</a> 
            <a href="">{t("lobby.layout.sectionTwo.logout")}</a>
          </section>
          
        </main>
        <footer>
          <h3>{t("footer")}</h3>
        </footer>
      </aside>
    
  );

  } else {
    return <></>;
  }
};

Layout.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

export default Layout;
