import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';

import { useAuth } from '../context/AuthContext.jsx'
import { createData, getData, deleteData } from '../apiService.js'
import { capitalizeWords } from '../utils/utils.js'

import Exitbtn from "../components/common/Exitbtn.jsx"
import MarketElement from "../components/elements/MarketElement.jsx"
import Modal from "../components/Modal.jsx"
import CheckRadio from "../components/common/form/CheckRadio.jsx"

const Markets = () => {

  const { register, handleSubmit, setValue,reset, formState: { errors, isSubmitted  } } = useForm()
  const { t } = useTranslation()
  const { user } = useAuth()

  const [markets, setMarkets] = useState([])
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false);
  const [errorServer, setErrorServer] = useState(null)

  const [isVisibleDelete, setIsVisibleDelete] = useState(false)
  const [selectedMarket, setSelectedMarket] = useState(null)

  const [isVisibleCreate, setIsVisibleCreate] = useState(false)
  const [selectedColor, setSelectedColor] = useState("#9ca3af")

  
  const handleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setValue('color', color)
  };
  
  const handleDeleteMarket = (market) => {
    setSelectedMarket(market)
    handleVisibleDelete() 
  };


  const onSubmit = async (data) => {    
    try {

      if(data.marketName && data.color && user.id){
        const marketData = {
          ...data,      
          userId: user.id
        }
      
        await createData('/markets/create', marketData)
        
        reset()
        setSelectedColor("")
        setRefresh(!refresh)
        setErrorServer(null)
        handleVisibleCreate()

      }

    } catch (error) {
      console.error('Error creating market:', error);
      setErrorServer(error.message || 'An unexpected error occurred');
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
      setErrorServer(error.message || 'An unexpected error occurred');
    }
  }

  useEffect(() => {
    if (user) {
      const fetchMarkets = async () => {
        try {
          const fetchedMarkets = await getData(`/markets/${user.id}`)          
          setMarkets(fetchedMarkets.data)
        } catch (error) {
          setErrorServer(error.message)
        } finally {
          setLoading(false)
        }
      };
      
      fetchMarkets()
    }
  },[user, refresh])


  if (loading) return <p>Loading...</p>

  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand bg-myWhite">
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">{t("market.h1")}</h1>

        <h2 className="text-xl font-lilita ">{markets.length}/10</h2>
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        {markets.map((market)=>{
          return(
            <MarketElement 
              key={market.id} 
              name={capitalizeWords(market.name)} 
              colorHexa={`#${market.color}`} 
              setActivatedDelete={() => handleDeleteMarket(market)}
            />
          )
        })}

        <button 
          className='w-48 mt-6 p-2 mx-auto text-center text-lg border-4 border-gray-400 text-gray-400 rounded-md shadow-xl shadow-gray-400 font-lilita'
          onClick={handleVisibleCreate}
        >{t("market.add")}</button>
 
      </article>

      <Modal isOpen={isVisibleCreate} handleVisible={handleVisibleCreate}>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <div className="flex flex-col gap-6">
            <div className='flex flex-col gap-2'>
              <input 
                type="text" 
                placeholder={t("market.modalCreate.input.placeholder")}
                {...register('marketName',{required: t("market.modalCreate.input.required")})}
                className="text-center text-lg px-3 py-1 border-b-2 shadow-lg duration-150 ease-in-out focus:outline-none focus:border-transparent"
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
              {(!selectedColor && isSubmitted) && <span className='text-red-400 text-sm pl-2'>{t("market.modalCreate.radioSelect")}</span>}
            </div>
            
          </div>        
          <div className="flex flex-col justify-center items-center gap-2 mt-6">
            <button 
              type="submit"
              className="px-7 py-1 border-4 border-green-300 rounded-md font-lilita"
              style={{borderColor: selectedColor}}
              disabled={markets.length >= 10}
            >{t("market.modalCreate.button")}</button>
            {
              markets.length >= 10 && <p className="text-red-400">{t("market.modalCreate.max")}</p>
            }
          </div>

          <div>
            {errorServer && <p className="text-red-400 text-sm mt-7">{errorServer}</p>}
          </div>
        </form>
        
      </Modal>

      <Modal isOpen={isVisibleDelete} handleVisible={handleVisibleDelete}>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='text-center text-lg'>{t("market.modalDelete.p.one")} {selectedMarket && capitalizeWords(selectedMarket.name)}, {t("market.modalDelete.p.two")}</p>
          <div className='flex gap-5'>
            <button 
              onClick={handleConfirmDelete}
              className='py-1 px-4 border-2 rounded-lg border-red-500 shadow-lg hover:shadow-red-500 duration-100 ease-in'
            >{t("market.modalDelete.btnDelete")}</button>
            
            <button 
              onClick={handleVisibleDelete}
              className='py-1 px-4 border-2 rounded-lg border-green-500 shadow-lg hover:shadow-green-500 duration-100 ease-in'
            >{t("market.modalDelete.btnCancel")}</button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default Markets
