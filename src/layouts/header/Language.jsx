import useLanguageContext from '../../hooks/context/useLanguageContext';

const Language = () => {
    const {language, setLanguage} = useLanguageContext();
    const style = "text-sm font-semibold border-[2px] border-stone-950 rounded-sm py-[6px] min-w-[35px] text-center text-stone-950 leading-none"
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
