
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

import SS from './assets/svg/logoSS.svg'
import arrowUP from './assets/svg/arrowUP.svg'

import cloudSync from './assets/svg/characteristics/cloudSync.svg'
import pen from './assets/svg/characteristics/penNotes.svg'
import userFriendly from './assets/svg/characteristics/userFriendly.svg';


function App() {

  const { t } = useTranslation()

  return (
    <main>
      <header className='flex justify-between items-center p-5'>
        <LanguageSwitcher />

        <a href="https://www.agussantos.es/" target='_blank'>
          <img 
            className='w-5 hover:scale-125 duration-75 ease-in' 
            src={SS} 
            alt="aguSSantos" 
          />
        </a>
      </header>
      <article className='h-dvh flex flex-col gap-10 justify-evenly items-center'>

        <section className='flex flex-col items-center'>
          <h1 className='text-2xl mb-10'>MarketList</h1>

          <div className='w-20 h-20 bg-green-400 rounded-full'></div>
        </section>
        

        <section className='flex gap-5'>
          <button  className="bg-white text-gray-800 font-semibold py-2 px-4 border border-green-500 rounded shadow-md hover:shadow-green-500 duration-200">{t('lobby.lobby-buttons.register')}</button>
          <button  className="bg-white text-gray-800 font-semibold py-2 px-4 border border-green-700 rounded shadow-md hover:shadow-green-700 duration-200">{t('lobby.lobby-buttons.login')}</button>
        </section>

        <a href="#info">
          <img 
            className='w-10 rotate-180 animate-fall' 
            src={arrowUP} 
            alt={t("lobby.arrowDown")} 
          />
        </a>

      </article>

      <article id='info' className='h-lvh bg-slate-400 flex flex-col justify-around items-center text-center'>

        <section className='mx-10'>
          <p>{t("lobby.information.paragraphOne")}</p>
        </section>

        <section className='mx-10 flex gap-1'>

          <div className='w-28 h-48 bg-slate-600'>
            <img src={userFriendly} alt="" />
            <h2>{t("lobby.information.characteristics.One")}</h2>
          </div>
          <div className='w-28 h-48 bg-slate-600'>
            <img src={pen} alt="" />
            <h2>{t("lobby.information.characteristics.Two")}</h2>
          </div>
          <div className='w-28 h-48 bg-slate-600'>
            <img src={cloudSync} alt="" />
            <h2>{t("lobby.information.characteristics.Three")}</h2>
          </div>
        </section>


        <section className='mx-10'>
          <p>{t("lobby.information.paragraphTwo")}</p>
        </section>

      </article>


    </main>
  )
}

export default App
