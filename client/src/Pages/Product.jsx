import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

import { getData } from "../apiService.js"
import { useAuth } from "../context/AuthContext.jsx"

import Exitbtn from "../components/common/Exitbtn.jsx"
import ProductElement from "../components/elements/ProductElement.jsx"
import InputSearch from "../components/common/InputSearch.jsx"
import Modal from "../components/Modal.jsx"
import { capitalizeWords } from "../utils/utils.js"


const Product = () => {

  const { register, handleSubmit, reset,setValue,  formState: { errors, isSubmitted } } = useForm()
  const { user } = useAuth()


  const [ labels, setLabels ] = useState([])
  const [ selectedLabel, setSelectedLabel ] = useState(null)
  const [ errorServerLabels, setErrorServerLabels ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");

  //const [isVisibleDelete, setIsVisibleDelete] = useState(false)
  const [isVisibleCreate, setIsVisibleCreate] = useState(false)

  //const handleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)

  const filteredLabels = labels.filter(label => 
    label.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (event) => setSearchTerm(event.target.value)


  const handleLabelClick = (label) => {
    setValue("labelId", label.id)
    setSelectedLabel(label.name)
  }

  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  useEffect(() => {
    if (user && isVisibleCreate) {
      const fetchLabels = async () => {

        try {
          const fetchedMarkets = await getData(`/labels/${user.id}`)          
          setLabels(fetchedMarkets.data)
        } catch (error) {
          setErrorServerLabels(error.message)
        } finally {
          setLoading(false)
        }
      }
      
      fetchLabels()
    }
  },[user, isVisibleCreate])
 

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
          className="flex flex-col justify-between items-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className="flex flex-col gap-2 ">
            <input 
              type="text" 
              placeholder={"Nombre del Producto"}
              {...register("productName",{required: "Tienes que rellenar este campo"})}
              className="text-center text-lg px-3 py-1 border-b-2 shadow-lg shadow-gray-400 duration-150 ease-in-out focus:outline-none focus:border-transparent"
              />
            {errors.productName && <span className='text-red-400 text-sm pl-2'>{errors.productName.message}</span> }
          </div>

          <div className="flex flex-col w-5/6 gap-2 text-lg">
            

            <div>
              <label 
                htmlFor=""
                className="w-full flex justify-between items-center"
              >
                Marca:
                <input 
                  type="text"
                  {...register("brand", {max: "Solo puede tener 9 caracteres"})}
                  className="w-28 h-6 px-2 border-b text-sm text-right focus:outline-none focus:border-b-gray-500" 
                />
              </label>
              {errors.brand && <span className='text-red-400 text-sm pl-2'>{errors.brand.message}</span> }
            </div>

            

            <div>
              <label 
                htmlFor=""
                className="w-full flex justify-between items-center"
              >
                Cantidad:
                <input 
                  type="text"
                  {...register("amout", {max: "Solo puede ser 6 caracteres"})}
                  className="w-28 h-6 px-2 border-b text-sm text-right focus:outline-none focus:border-b-gray-500" 
                />
              </label>
              {errors.amout && <span className='text-red-400 text-sm pl-2'>{errors.amout.message}</span> }
            </div>

            <div>
              <label 
                htmlFor=""
                className="w-full flex justify-between items-center"
              >
                Precio:
                <input 
                  type="text"
                  {...register("priece", {max: "Solo puede ser de 6 digitos"})}
                  className="w-28 h-6 px-2 border-b text-sm text-right tracking-widest focus:outline-none focus:border-b-gray-500" 
                />
              </label>
              {errors.priece && <span className='text-red-400 text-sm pl-2'>{errors.priece.message}</span> }
            </div>

            
          </div>

          <div className="flex flex-col justify-center items-center gap-3 mx-4">
            <InputSearch size="sm" onSearch={handleSearch}/>

            <div className="max-h-28 flex flex-wrap justify-center items-start gap-1 mx-3 text-sm overflow-y-auto">

              {loading ? (

                <span className="text-gray-500">Cargando...</span> 

              ) : errorServerLabels ? (

                <span className="text-red-500">Error 500: Se a encontrado un error, intentelo de nuevo o mas tarde</span> // Muestra el mensaje de error
              
              ) : (
                
                filteredLabels.map((label) => (
                  <span 
                    key={label.id}
                    onClick={() => handleLabelClick(label)}
                    className={`px-2 py-1 border-2 rounded duration-150 ${selectedLabel === label.name ? "border-violet-300" : ""}`}
                  >
                    {capitalizeWords(label.name) + label.emoji}
                  </span>
                ))
              )}

            </div>

            {(!selectedLabel && isSubmitted) && <span className="text-red-400 text-sm text-center pl-2">Debes selecionar una etiqueta</span>}
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
