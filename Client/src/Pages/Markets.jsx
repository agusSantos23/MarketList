
import { useState } from "react"

import Exitbtn from "../components/common/Exitbtn.jsx"
import MarketElement from "../components/elements/MarketElement.jsx"
import Modal from "../components/Modal.jsx"
import CheckRadio from "../components/common/form/CheckRadio.jsx"

const Markets = () => {

  const [isVisibleDelete, setIsVisibleDelete] = useState(false)
  const [isVisibleCreate, setIsVisibleCreate] = useState(false)

  const [selectedColor, setSelectedColor] = useState("");


  //const hanleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const hanleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)


  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand">
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">Add Market</h1>

        <h2 className="text-xl font-lilita border-blue-500">{"2"}/10</h2>
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        <MarketElement name="Mercadona" color="green-400"/>

        <MarketElement name="CashGarcia" color="yellow-400"/>

        <MarketElement name="UnoRojo" color="red-400"/>

        <MarketElement name="Carrefour" color="blue-500"/>

        <div 
          className="w-48 mt-5 p-2 mx-auto text-center text-lg border-4 rounded-md shadow-xl font-lilita"
          onClick={hanleVisibleCreate}
        >
          <h2>Add a Market</h2>
        </div>
 
      </article>

      <Modal isOpen={isVisibleCreate} hanleVisible={hanleVisibleCreate}>
        <form 
          onSubmit={""}
          className="h-56 flex flex-col justify-between items-center"
        >
          <div className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Market Name"
              className="text-center text-lg border-b-2 shadow-lg duration-150 ease-in-out focus:outline-none focus:border-transparent"
              style={{borderColor: selectedColor, boxShadow: `0 4px 6px -1px ${selectedColor}`}}
            />

            <div className="grid grid-cols-5 grid-rows-2 gap-5">
              <CheckRadio color="#f77272" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#5fa5fa" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#a78cfa" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#49de80" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#facc14" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              
              <CheckRadio color="#f04343" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#3b82f5" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#895bf5" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#21c45d" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
              <CheckRadio color="#ebb207" selectedValue={selectedColor} setSelectedValue={setSelectedColor} />
        
            </div>
          </div>
          

          <button 
            type="submit"
            className=" px-7 py-1 border-4 border-green-300 rounded-md font-lilita "
            style={{borderColor: selectedColor}}
          >ADD</button>


        </form>
        
      </Modal>
    </main>
  )
}

export default Markets
