//import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import NameSearch from "../components/common/InputSearch.jsx";
import Layout from "../components/Layout.jsx";

import menuSVG from "../assets/svg/common/menu.svg";
import checkSVG from "../assets/svg/common/check.svg"
import addSVG from "../assets/svg/common/add.svg";


const Lobby = () => {

  //const { logout, user } = useAuth() 

  const [isVisibleLayout, setIsVisibleLayout] = useState(false)
  const [isVisiblePopup, setIsVisiblePopup] = useState(false)

  const { t } = useTranslation()

  function hola(value){
    console.log("hola:", value);
    
  }

  const hanleVisibleLayout = () => setIsVisibleLayout(!isVisibleLayout)
  const hanleVisiblePopup = () => setIsVisiblePopup(!isVisiblePopup)


  useEffect(() => {
    if (isVisibleLayout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isVisibleLayout]);
  
  return (
    <main className="relative px-3 py-5 bg-myWhite min-h-svh font-quicksand">
      <Layout isVisible={isVisibleLayout} hanleVisible={hanleVisibleLayout}/>

      <header 
        className="fixed left-1/2 transform -translate-x-1/2 w-11/12 flex justify-between items-center z-10"
      >
        <div 
          className=" w-9 p-1 border-2 rounded-md bg-myWhite border-t-blue-200 border-l-blue-200 border-b-blue-400 border-r-blue-400 shadow-lg shadow-blue-300 hover:scale-125 duration-200"
          onClick={hanleVisibleLayout}
        >
          <img 
            src={menuSVG} 
            alt="icon menu" 
          />
        </div>
  
        <NameSearch onSearch={hola} />

        <div className="w-10 h-10 border-4 rounded-md bg-myWhite  border-t-yellow-200 border-l-yellow-200 border-b-yellow-400 border-r-yellow-400 shadow-lg shadow-yellow-200">
          <img 
            src={checkSVG} 
            alt="icon check" 
          />
        </div>

      </header>

      <article className="relative flex flex-col gap-4 mt-16">

        <div className="fixed bottom-3 right-2 w-48 h-32 z-10">
          <div 
            className={`absolute right-0 bottom-0 w-12 h-12 border-4 rounded-md bg-myWhite ${!isVisiblePopup ? "border-t-green-200 border-l-green-200 border-b-green-400 border-r-green-400 shadow-lg shadow-green-200" :"border-t-red-200 border-l-red-200 border-b-red-400 border-r-red-400 shadow-lg shadow-red-200"}`}
            onClick={hanleVisiblePopup}
          >
            <img src={addSVG} alt="add"/>
          </div>
          { isVisiblePopup && (
            
            <div className='flex flex-col justify-around items-center absolute right-8 bottom-8 w-36 h-24 text-xl bg-myWhite rounded-sm border-4 border-t-green-200 border-l-green-200 border-b-green-400 border-r-green-400 z-20'>
              <Link>{t("lobby.plus.labels")}</Link>
              <div className='border-2 w-24 rounded-md border-green-300 shadow-md shadow-green-300'></div>
              <Link to="/markets">{t("lobby.plus.markets")}</Link>
            </div>
          )}
          
        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-2xl ml-2"
          >Manzana</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2 "
          >🍎</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-2xl ml-2"
          >Queso</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🧀</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-2xl ml-2"
          >Carne</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🥩</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Manzana</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2 "
          >🍎</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Queso</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🧀</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Carne</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🥩</span>

        </div>
        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Manzana</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2 "
          >🍎</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Queso</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🧀</span>

        </div>

        <div 
          className="relative h-24 border-4 overflow-hidden flex justify-start items-center rounded-md border-t-gray-300 border-l-gray-300 border-b-gray-600 border-r-gray-600 shadow-lg shadow-gray-400"
        >
          <h2 
            className="text-xl ml-2"
          >Carne</h2>

          <span
            className="absolute text-8xl -right-7 top-1/2 -translate-y-1/2"
          >🥩</span>

        </div>

      </article>
      
    </main>
  )
}

export default Lobby
