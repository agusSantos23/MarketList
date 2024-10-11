import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react"

import { useAuth } from '../context/AuthContext.jsx'
import { createData, getData, deleteData } from '../apiService.js'
import { capitalizeWords } from '../utils/utils.js'

import Exitbtn from "../components/common/Exitbtn.jsx"
import MarketElement from "../components/elements/MarketElement.jsx"
import Modal from "../components/Modal.jsx"
import CheckRadio from "../components/common/form/CheckRadio.jsx"

const Markets = () => {

  const { register, handleSubmit, setValue, formState: { errors, isSubmitted  } } = useForm()
  const { user } = useAuth()

  const [markets, setMarkets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const [isVisibleDelete, setIsVisibleDelete] = useState(false)
  const [selectedMarket, setSelectedMarket] = useState(null)

  const [isVisibleCreate, setIsVisibleCreate] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  
  const [refresh, setRefresh] = useState(false);


  const handleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setValue('color', color);  
  };
  
  const handleDeleteMarket = (market) => {
    setSelectedMarket(market); 
    handleVisibleDelete(); 
  };


  const onSubmit = async (data) => {    
    try {

      if(data.marketName && data.color && user.id){
        const marketData = {
          ...data,      
          userId: user.id
        }
      
        await createData('/markets/create', marketData)
        
        handleVisibleCreate(!isVisibleCreate)
        setSelectedColor("")
        setRefresh(!refresh)
        setError(null)
      }

    } catch (error) {
      console.error('Error creating market:', error);
      setError(error.message || 'An unexpected error occurred');
    }    
  }

  const handleConfirmDelete = async () =>{
    try {
      if (selectedMarket.id) {
        const response = await deleteData(`/markets/delete/${selectedMarket.id}`)
        if (response.status === 200) {
          setRefresh(!refresh)
          handleVisibleDelete()
          setSelectedMarket(null)
        }
      }
    } catch (error) {
      console.error('Error deleting market:', error.message)
    }
  }
  

  useEffect(() => {

    if (user) {
      const fetchMarkets = async () => {
        try {
          const fetchedMarkets = await getData(`/markets/${user.id}`);          
          setMarkets(fetchedMarkets.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchMarkets();
    }
  },[user, refresh])


  if (loading) return <p>Loading...</p>; 

  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand">
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">Add Market</h1>

        <h2 className="text-xl font-lilita border-blue-500">{markets.length}/10</h2>
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        {markets.map((market)=>{
          return(
            <MarketElement 
              key={market.id} 
              name={capitalizeWords(market.name)} 
              colorHexa={`#${market.color}`} 
              activated={isVisibleDelete} 
              setActivatedDelete={() => handleDeleteMarket(market)}
            />
          )
        })}

        <button 
          className='w-48 mt-6 p-2 mx-auto text-center text-lg border-4 border-gray-400 text-gray-400 rounded-md shadow-xl shadow-gray-400 font-lilita'
          onClick={handleVisibleCreate}
        >Add a Market</button>
 
      </article>

      <Modal isOpen={isVisibleCreate} handleVisible={handleVisibleCreate}>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex flex-col gap-6">
            <div className='flex flex-col gap-2'>
              <input 
                type="text" 
                placeholder="Market Name"
                {...register('marketName',{required: 'Market Name is required'})}
                className="text-center text-lg border-b-2 shadow-lg duration-150 ease-in-out focus:outline-none focus:border-transparent"
                style={{borderColor: selectedColor, boxShadow: `0 4px 6px -1px ${selectedColor}`}}
              />
              {errors.marketName && <span className='text-red-400 text-sm pl-2'>{errors.marketName.message}</span>}
            </div>
            
            <div className='flex flex-col gap-2'>
              <div className="grid grid-cols-5 grid-rows-2 gap-x-5 gap-y-2">
                {['#f77272', '#5fa5fa', '#a78cfa', '#49de80', '#facc14', '#f04343', '#3b82f5', '#895bf5', '#21c45d', '#ebb207'].map((color) => (
                  <CheckRadio
                    key={color}
                    color={color}
                    selectedValue={selectedColor}
                    handleColorChange={handleColorChange} 
                  />
                ))}
              </div>
              {(!selectedColor && isSubmitted) && <span className='text-red-400 text-sm pl-2'>Please select a color</span>}
            </div>
            
          </div>
          
          <div className='flex flex-col justify-center items-center gap-2'>
            <button 
              type="submit"
              className=" px-7 py-1 border-4 border-green-300 rounded-md font-lilita "
              style={{borderColor: selectedColor}}
              disabled={markets.length >= 10}
            >ADD</button>
            {
              markets.length >= 10 && <p className='text-sm text-red-400'> no puedes agregar mas mercados</p>
            }
          </div>

          <div>
            {error && <p className='text-red-400 text-sm'>{error}</p>}

          </div>
        </form>
        
      </Modal>

      <Modal isOpen={isVisibleDelete} handleVisible={handleVisibleDelete}>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='text-center text-lg'>Do you want to delete {selectedMarket && capitalizeWords(selectedMarket.name)}, which will delete all products under it?</p>
          <div className='flex gap-5'>
            <button 
              onClick={handleConfirmDelete}
              className='py-1 px-4 border-2 rounded-lg border-red-500 shadow-lg hover:shadow-red-500 duration-100 ease-in'
            >Delete</button>
            
            <button 
              onClick={handleVisibleDelete}
              className='py-1 px-4 border-2 rounded-lg border-green-500 shadow-lg hover:shadow-green-500 duration-100 ease-in'
            >Cancel</button>
          </div>
        </div>
        
      </Modal>
    </main>
  )
}

export default Markets
