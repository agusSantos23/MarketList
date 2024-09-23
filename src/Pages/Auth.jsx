import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';



import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher.jsx';

import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import Exitbtn from '../components/common/Exitbtn.jsx';

import SS from '../assets/svg/logoSS.svg'


const Auth = () => {

  const location = useLocation();
  const [openSection, setOpenSection] = useState('login');
  const { t } = useTranslation()


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    
    if (section) {
      setOpenSection(section); 
    }
  }, [location]);

  return (
    <main className='bg-myWhite h-lvh'>
      <header className='flex justify-between items-center py-2 px-5 '>
        <div className='flex gap-8'>
          <Exitbtn />
          
          <LanguageSwitcher />
        </div>
        

        <a href="https://www.agussantos.es/" target='_blank'>
          <img 
            className='w-5 hover:scale-125 duration-75 ease-in' 
            src={SS} 
            alt="aguSSantos" 
          />
        </a>
      </header>
      <div className='absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-5/6 h-3/4 border-2 border-gray-300 rounded-md shadow-2xl'>
      
        <div className='flex justify-around mt-1'>

          <div className=' w-36 py-1 border-2 border-gray-200 rounded-md shadow-md text-lg text-center text-gray-600 font-lilita'>
            <h2 onClick={() => setOpenSection('register')}>{t("auth.sections.register")}</h2>
          </div>
          
          <div className=' w-36 py-1 border-2 border-gray-200 rounded-md shadow-md text-lg text-center text-gray-600 font-lilita'>
            <h2 onClick={() => setOpenSection('login')}>{t("auth.sections.login")}</h2>
          </div>

          

        </div>
        <div className='h-5/6 flex flex-col items-center mt-7'>
          {
            openSection === 'login' && <Login />
          }

          {openSection === 'register' && <Register />}

        </div>
      </div>
      
    
    </main>
  )
}

export default Auth
