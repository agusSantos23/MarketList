
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';


import Input from './common/Input';
import Button from './common/Button';



const Register = () => {

  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const { t } = useTranslation()

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col h-full justify-around gap-6 items-center font-quicksand text-xs'  
    >
      
      <div className='flex flex-col items-center gap-5'>
        
        <div className='flex flex-col gap-3'>
          <Input 
            type="email" 
            id="email" 
            placeholder={t("auth.inputs.email")}
            register={register}
            required={true}
            errors={errors}
          />
          <Input 
            type="text" 
            id="username" 
            placeholder={t("auth.inputs.username")}
            register={register}
            required={true}
            minLength={3}
            errors={errors}
          />
          <Input 
            type="password" 
            id="password" 
            placeholder={t("auth.inputs.password")}
            register={register}
            required={true}
            errors={errors}
            minLength={8}
            formValues={watch()}
          />
          <Input 
            type="password" 
            id="passwordRepeat" 
            placeholder={t("auth.inputs.password")}
            register={register}
            required={true}
            errors={errors}
            compareWith="password"
            formValues={watch()}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='flex justify-center items-center'>
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
          {errors.terms && <p className='ml-1 pl-1 border-l-2 rounded-xl border-red-400 tracking-wide '>{errors.terms.message}</p>}
        </div>
      
        <Button content={t("auth.sections.register")}/>

      </div>


      <div className='w-7 h-7 bg-amber-200'></div>
    </form>
  )
}

export default Register
