//import { useAuth } from '../context/AuthContext'

import NameSearch from "../components/common/InputSearch.jsx";
import Layout from "../components/Layout.jsx";

import menuSVG from "../assets/svg/common/menu.svg";
import checkSVG from "../assets/svg/common/check.svg"
import addSVG from "../assets/svg/common/add.svg";
import { useState } from "react";


const Lobby = () => {

  //const { logout, user } = useAuth() 

  const [isVisible, setIsVisible] = useState(false)

  function hola(value){
    console.log("hola:", value);
    
  }
  
  return (
    <main className="relative px-3 py-5 bg-myWhite min-h-svh">
      <Layout isVisible={true}/>

      <header 
        className="fixed left-1/2 transform -translate-x-1/2 w-11/12 flex justify-between items-center z-10"
      >
        <div className=" w-9 p-1 border-2 rounded-md bg-myWhite border-t-blue-200 border-l-blue-200 border-b-blue-400 border-r-blue-400 shadow-lg shadow-blue-300 hover:scale-125 duration-200">
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

        <div className="fixed bottom-3 right-2 w-12 h-12 border-4 rounded-md bg-myWhite border-t-green-200 border-l-green-200 border-b-green-400 border-r-green-400 shadow-lg shadow-green-200 z-10">
          <img src={addSVG} alt="add"/>
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
