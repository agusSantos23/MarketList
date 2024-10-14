import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";

import ssSVG from "../assets/svg/logoSS.svg"
import arrowDownSVG from "../assets/svg/common/arrowDown.svg"

import cloudSync from "../assets/svg/characteristics/cloudSync.svg"
import pen from "../assets/svg/characteristics/penNotes.svg"
import userFriendly from "../assets/svg/characteristics/userFriendly.svg";

const Home = () => {

  
  const navigate = useNavigate()
  const { t } = useTranslation()


  const handleClick = (section) =>{
    navigate(`/auth?section=${section}`)
  }

  
  return (
    <main className=" bg-myWhite">
      <header className="h-14 flex justify-between items-center px-5 py-2">
        <LanguageSwitcher />

        <a href="https://www.agussantos.es/" target="_blank">
          <img 
            className="w-5 hover:scale-125 duration-75 ease-in" 
            src={ssSVG} 
            alt="aguSSantos" 
          />
        </a>
      </header>
      <article className="h-dvh flex flex-col gap-10 justify-evenly items-center">

        <section className="flex flex-col items-center">
          <h1 className="text-3xl mb-10 font-lilita text-myBlack">MarketList</h1>

          <div className="w-20 h-20 bg-green-400 rounded-full"></div>
        </section>
        

        <section className="flex gap-5">
          <button 
            onClick={() => handleClick("register")}
            className="bg-myWhite font-quicksand text-xl py-2 px-4 border border-green-500 rounded shadow-md hover:shadow-green-500 duration-200">{t("home.lobby-buttons.register")}
          </button>
          <button 
            onClick={() => handleClick("login")}
            className="bg-myWhite font-quicksand text-xl py-2 px-4 border border-green-700 rounded shadow-md hover:shadow-green-700 duration-200">{t("home.lobby-buttons.login")}
          </button>
        </section>

        <a href="#info">
          <img 
            className="w-10 animate-fall" 
            src={arrowDownSVG} 
            alt="arrowDown"
          />
        </a>

      </article>

      <article id="info" className="h-lvh flex flex-col justify-center gap-2 items-center text-center">

        <section className="mx-6">
          <h3 className="text-xl text-myBlack mb-3 font-lilita">{t("home.information.paragraphOne.h3")}</h3>
          <p className="font-quicksand">{t("home.information.paragraphOne.p")}</p>
        </section>

        <section>

          <div className="w-72 h-20 px-4 bg-myWhite flex gap-5 justify-start items-center my-5 border-2 rounded-md shadow-lateral-orange border-orange-400 hover:scale-110 duration-300 ease-in-out">
            <img className="w-10" src={userFriendly} alt={t("home.information.characteristics.One")} />
            <h3 className="font-bold font-quicksand">{t("home.information.characteristics.One")}</h3>
          </div>
          
          <div className="w-72 h-20 px-4 bg-myWhite flex gap-5 justify-start items-center my-5 border-2 rounded-md shadow-lateral-violet border-violet-400 hover:scale-110 duration-300 ease-in-out">
            <img className="w-10" src={pen} alt={t("home.information.characteristics.Two")} />
            <h3 className="font-bold font-quicksand">{t("home.information.characteristics.Two")}</h3>
          </div>

          <div className="w-72 h-20 px-4 bg-myWhite flex gap-5 justify-start items-center my-5 border-2 rounded-md shadow-lateral-green border-green-400 hover:scale-110 duration-300 ease-in-out">
            <img className="w-10" src={cloudSync} alt={t("home.information.characteristics.Three")} />
            <h3 className="font-bold font-quicksand">{t("home.information.characteristics.Three")}</h3>
          </div>
        </section>


        <section className="mx-5">
          <h3 className="text-xl text-myBlack mb-3 font-lilita">{t("home.information.paragraphTwo.h3")}</h3>
          <p className="font-quicksand">{t("home.information.paragraphTwo.p")}</p>
        </section>

      </article>
      <footer className="bg-myBlack text-myWhite p-2 text-center font-lilita">
        <a href="https://www.agussantos.es/" target="_blank">{t("footer")} Agu<span className="text-orange-400">SS</span>antos</a>
      </footer>

    </main>
  )
}

export default Home
