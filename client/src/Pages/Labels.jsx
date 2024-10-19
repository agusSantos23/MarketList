import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useAuth } from '../context/AuthContext.jsx'
import { createData, deleteData, getData } from "../apiService.js"

import LabelElement from "../components/elements/LabelElement.jsx"
import Modal from "../components/Modal.jsx"
import Exitbtn from "../components/common/Exitbtn.jsx"
import EmojiPicker from "../components/EmojiPicker.jsx"
import { capitalizeWords } from "../utils/utils.js"

const Labels = () => {

  const { register, handleSubmit, setValue,reset} = useForm()
  const { t } = useTranslation()
  const { user } = useAuth()

  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(false);
  const [errorServer, setErrorServer] = useState(null)

  const [isVisibleDelete, setIsVisibleDelete] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(null)

  const [isVisibleCreate, setIsVisibleCreate] = useState(false)

  const [selectedEmoji, setSelectedEmoji] = useState(null)



  const handleVisibleDelete = () => setIsVisibleDelete(!isVisibleDelete)
  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)

  
  
  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji)
    setValue("emoji", emoji)
  }

  const handleDeleteLabel = (label) => {
    setSelectedLabel(label)
    handleVisibleDelete()
  }


  const onSubmit = async (data) => {

    const emojiToSubmit = selectedEmoji || "🍎"
    
    try {
      if(data.labelName && user.id){
        
        const labelData = {
          ...data,
          emoji: emojiToSubmit,
          userId: user.id
        }        

        await createData('/labels/create', labelData)

        reset()
        setRefresh(!refresh)
        setSelectedEmoji(null)
        setErrorServer(null)
        handleVisibleCreate()
        
      }

    } catch (error) {
      console.error(error);
      setErrorServer(error.message || 'An unexpected error occurred');
    }
  }

  const handleConfirmDelete = async () =>{
    try {
      if (selectedLabel.id) {
        const response = await deleteData(`/labels/delete/${selectedLabel.id}`)
        if (response.status === 200) {
          setRefresh(!refresh)
          handleVisibleDelete()
          setSelectedLabel(null)
        }
      }
    } catch (error) {
      console.error('Error deleting market:', error.message)
      setErrorServer(error.message || 'An unexpected error occurred')
    }
  }


  useEffect(()=>{
    
    if(user){

      const fetchLabels = async () => {
        try {
          const fetchedLabels = await getData(`/labels/${user.id}`)
          setLabels(fetchedLabels.data)
        } catch (error) {
          setErrorServer(error.message)
        }finally{
          setLoading(false)
        }
      }
      fetchLabels()
    }

  },[user,refresh])

  if (loading) return <p>Loading...</p>

  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand bg-myWhite">
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">Labels</h1>

        <h2 className="text-xl font-lilita">{labels.length}/150</h2>
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        {labels.map((label)=>{
          return(
            <LabelElement 
              key={label.id}
              id={label.id}
              name={capitalizeWords(label.name)}
              emoji={label.emoji}
              setActivatedDelete={() => handleDeleteLabel(label)}
            />
          )
        })}

        <button 
          onClick={handleVisibleCreate}
          className='w-48 mt-6 p-2 mx-auto text-center text-lg border-4 border-gray-400 text-gray-400 rounded-md shadow-xl shadow-gray-400 font-lilita'
        >ADD</button>

      </article>


      <Modal isOpen={isVisibleCreate} handleVisible={handleVisibleCreate}> 
        <form 
          className="flex flex-col justify-between items-center h-80 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder={"Nombre de la Etiqueta"}
              {...register('labelName',{required: t("market.modalCreate.input.required")})}
              className="text-center text-lg px-3 py-1 border-b-2 shadow-lg shadow-gray-400 duration-150 ease-in-out focus:outline-none focus:border-transparent"
              />
          </div>

          <EmojiPicker onEmojiSelect={handleEmojiSelect} emoji={selectedEmoji}/>

          
          <div>
            {errorServer && <p className="text-red-400 text-sm mt-7">{errorServer}</p>}
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <button 
              type="submit"
              disabled={labels.length >= 150}
              className="px-7 py-1 border-4 border-green-300 rounded-md font-lilita"
            >ADD</button>
            {
              labels.length >= 150 && <p className="text-red-400">{t("market.modalCreate.max")}</p>
            }
          </div>

        </form>
      </Modal>





      <Modal isOpen={isVisibleDelete} handleVisible={handleVisibleDelete}>
        <div className='flex flex-col items-center justify-center gap-5'>
          <p className='text-center text-lg'>{t("market.modalDelete.p.one")} {selectedLabel && capitalizeWords(selectedLabel.name)}, {t("market.modalDelete.p.two")}</p>
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

export default Labels
