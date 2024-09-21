import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='flex gap-4 text-xl'>
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
