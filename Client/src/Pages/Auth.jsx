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


      <div className='absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 border-2 border-gray-300 rounded-md shadow-2xl'>
      
        <div className='flex justify-around mt-2'>

          <div className={`w-36 py-1 border-2  rounded-md text-lg text-center text-myBlack font-lilita ${openSection !== "login" ? "shadow-green-focus border-green-300": "shadow-md border-gray-300"}`}>
            <h2 onClick={() => setOpenSection('register')}>{t("auth.sections.register")}</h2>
          </div>
          
          <div className={`w-36 py-1 border-2  rounded-md text-lg text-center text-myBlack font-lilita ${openSection !== "register" ? "shadow-green-focus border-green-300": "shadow-md border-gray-300"}`}>
            <h2 onClick={() => setOpenSection('login')}>{t("auth.sections.login")}</h2>
          </div>

        </div>
        
          {openSection === 'login' && <Login />}

          {openSection === 'register' && <Register />}

        
      </div>
      
    
    </main>
  )
}

export default Auth
