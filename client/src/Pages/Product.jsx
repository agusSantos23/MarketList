import { useState } from "react"
import { useForm } from "react-hook-form"

import Exitbtn from "../components/common/Exitbtn.jsx"
import ProductElement from "../components/elements/ProductElement.jsx"
import InputSearch from "../components/common/InputSearch.jsx"
import Modal from "../components/Modal.jsx"

const Product = () => {

  const { register, handleSubmit, reset, formState: { errors  } } = useForm()


  //const [isVisibleDelete, setIsVisibleDelete] = useState(false)

  const [isVisibleCreate, setIsVisibleCreate] = useState(false)


  //const handleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)


  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand bg-myWhite">
      
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <div className="relative">
          <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">Products</h1>
          <h2 className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-green-400 font-lilita tracking-wider">Mercadona</h2>
        </div>

        <h2 className="text-xl font-lilita ">{4}/150</h2>
        
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        <ProductElement />

        
      
        

        <button 
          className='w-48 mt-6 p-2 mx-auto text-center text-lg border-4 border-gray-400 text-gray-400 rounded-md shadow-xl shadow-gray-400 font-lilita'
          onClick={handleVisibleCreate}
        >ADD</button>
 
      </article>

      <Modal isOpen={isVisibleCreate} handleVisible={handleVisibleCreate}>
        
        <form
          className="flex flex-col justify-between items-center"
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className="flex flex-col gap-2 mb-8">
            <input 
              type="text" 
              placeholder={"Nombre del Producto"}
              {...register("productName",{required: "Tienes que rellenar este campo"})}
              className="text-center text-lg px-3 py-1 border-b-2 shadow-lg shadow-gray-400 duration-150 ease-in-out focus:outline-none focus:border-transparent"
              />
            {errors.productName && <span className='text-red-400 text-sm pl-2'>{errors.marketName.message}</span> }
          </div>

          <div className="flex flex-col w-5/6 gap-2 mb-8 text-lg">
            <label 
              htmlFor=""
              className="w-full flex justify-between items-center"
            >
              Marca:
              <input 
                type="text"
                {...register("brand", {max: "Solo puede tener 9 caracteres"})}
                className="w-28 h-8 px-2 border-b text-sm text-right focus:outline-none focus:border-b-gray-500" 
              />
            </label>

            <label 
              htmlFor=""
              className="w-full flex justify-between items-center"
            >
              Cantidad:
              <input 
                type="text"
                {...register("amout", {max: "Solo puede ser 6 caracteres"})}
                className="w-28 h-8 px-2 border-b text-sm text-right focus:outline-none focus:border-b-gray-500" 
              />
            </label>

            <label 
              htmlFor=""
              className="w-full flex justify-between items-center"
            >
              Precio:
              <input 
                type="number"
                {...register("priece", {max: "Solo puede ser de 6 digitos"})}
                className="w-28 h-8 px-2 border-b text-sm text-right tracking-widest focus:outline-none focus:border-b-gray-500" 
              />
            </label>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 mb-16 mx-4">
            <InputSearch size="sm" />
            <div className="h-20 flex flex-wrap justify-start items-start gap-1 mx-3 text-sm overflow-y-auto">

              <span className=" px-2 py-1 border-2 rounded">Panes</span>
              <span className=" px-2 py-1 border-2 rounded">Manzanas</span>
              <span className=" px-2 py-1 border-2 rounded">Pezes</span>
              <span className=" px-2 py-1 border-2 rounded">Pollo</span>
              <span className=" px-2 py-1 border-2 rounded">Filete</span>
              <span className=" px-2 py-1 border-2 rounded">Manzanas</span>
              <span className=" px-2 py-1 border-2 rounded">Panes</span>
              <span className=" px-2 py-1 border-2 rounded">Manzanas</span>
              <span className=" px-2 py-1 border-2 rounded">Pezes</span>
              <span className=" px-2 py-1 border-2 rounded">Pollo</span>
              <span className=" px-2 py-1 border-2 rounded">Filete</span>
              <span className=" px-2 py-1 border-2 rounded">Manzanas</span>
            </div>
          </div>

          <button 
            type="submit"
            className="px-7 py-1 border-4 border-green-300 rounded-md font-lilita"
          >Add</button>
        </form>
      </Modal>

    </main>
  )
}

export default Product
