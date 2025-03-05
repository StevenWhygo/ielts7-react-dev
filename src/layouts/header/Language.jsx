import useLanguageContext from '../../hooks/context/useLanguageContext';

const Language = () => {
    const {language, setLanguage} = useLanguageContext();
    const style =
      'text-sm font-semibold border-[2px] borde-slate-100 rounded-sm py-[6px] min-w-[30px] text-center text-slate-100 leading-none';
  return (
        <>
            {language === 'zh' ? (
                <button
                className={style}
                onClick={() => setLanguage('en')}
                >
                EN
                </button>
            ) : (
                <button
                className={style}
                onClick={() => setLanguage('zh')}
                >
                ZH
                </button>
            )}
        </>
  )
};
export default Language;
