import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { handleErrorResponse } from '../utils/utils.js'
import { createData } from '../apiService.js'
import { useAuth } from '../context/AuthContext.jsx'

import Input from './common/form/Input.jsx'
import Button from './common/form/Button.jsx'

const Login = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation()
  const { login } = useAuth()

  const [errorServer, setErrorServer] = useState(null)


  const onSubmit = async (data) => {
    try {
      const response = await createData('/login', data)      
      login(response.data)
      
    } catch (error) {
      console.error('Error register:', error.message)
      setErrorServer( handleErrorResponse(error, t) || 'An unexpected error occurred')
    }
  }



  return (
    
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col h-5/6 my-6 justify-around items-center font-quicksand'  
    >
      
      <div className='flex flex-col items-center gap-5'>
        
        <div className='flex flex-col items-center gap-2'>
          <Input 
            type="email" 
            id="email" 
            placeholder={t("auth.inputs.email")}
            register={register}
            required={true}
            errors={errors}
          />
          
          <Input 
            type="password" 
            id="password" 
            placeholder={t("auth.inputs.password")}
            register={register}
            required={true}
            errors={errors}
            minLength={6}
          />
        <div className='flex flex-col'>
          <label className='flex justify-center items-center text-sm'>
            <input 
              type="checkbox" 
              {...register('terms', { required: t("auth.inputs.errors.terms") })}
              className='mr-2' 
            />
            <span>{t("auth.inputs.terms.one")} <a 
                className='text-blue-400 hover:font-bold duration-150 ease-in' 
                href="/terms-and-conditions" 
                target="_blank"
              >{t("auth.inputs.terms.two")}</a>
            </span>
          </label>
          {errors.terms && <p className='ml-1 pl-2 text-xs border-l-2 rounded-xl border-red-400 tracking-wide '>{errors.terms.message}</p>}
        </div>
        </div>
        
        <Button content={t("auth.sections.login")}/>

        {errorServer && <p className='text-red-400 text-sm mt-7'>{errorServer}</p>}
      </div>


      <div className='w-7 h-7 bg-amber-200'></div>
    </form>
  )
}

export default Login
