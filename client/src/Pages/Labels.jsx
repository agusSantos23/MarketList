import { useState } from "react"
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'


import LabelElement from "../components/elements/LabelElement.jsx"
import Modal from "../components/Modal.jsx"
import Exitbtn from "../components/common/Exitbtn.jsx"
import EmojiPicker from "../components/EmojiPicker.jsx"

const Labels = () => {

  const { register, handleSubmit, setValue, formState: { errors  } } = useForm()
  const { t } = useTranslation()


  const [isVisibleCreate, setIsVisibleCreate] = useState(false)

  const [selectedEmoji, setSelectedEmoji] = useState(null)


  const handleVisibleCreate = () => setIsVisibleCreate(!isVisibleCreate)
  
  
  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji)
    setValue("emoji", emoji)
  };

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <main className="relative px-3 py-5 min-h-svh font-quicksand bg-myWhite">
      <header className="flex mx-1 justify-between items-center">
        <Exitbtn />

        <h1 className="w-52 text-2xl py-2 text-center shadow-xl rounded-lg">Labels</h1>

        <h2 className="text-xl font-lilita">{3}/150</h2>
      </header>

      <article className="px-3 mt-10 flex flex-col gap-5">

        <LabelElement />

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
              {...register('marketName',{required: t("market.modalCreate.input.required")})}
              className="text-center text-lg border-b-2 shadow-lg duration-150 ease-in-out focus:outline-none focus:border-transparent"
            />
            {errors.marketName && <span className='text-red-400 text-sm pl-2'>{errors.marketName.message}</span>}
          </div>

          <EmojiPicker onEmojiSelect={handleEmojiSelect} emoji={selectedEmoji}/>

          
  

          <div className="flex flex-col justify-center items-center gap-2">
            <button 
              type="submit"
              className="px-7 py-1 border-4 border-green-300 rounded-md font-lilita"
            >{t("market.modalCreate.button")}</button>
            {
              //markets.length >= 10 && <p className="text-red-400">{t("market.modalCreate.max")}</p>
            }
          </div>

        </form>
      </Modal>
    </main>
  )
}

export default Labels
