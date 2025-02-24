import { useState, useEffect } from 'react';
import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../components/Scroller';
import Card from '../../components/Card';
import useLang from '../../hooks/context/useLang';
import useTranslation from '../../hooks/useTranslation';

const Home = () => {
  const { setLanguage } = useLang();
  const { translate } = useTranslation('global');

  return (
    <>
      <Carousel elements={translate('carousel.slides')} />
      <button
        className="border px-10 py-2 mx-2"
        onClick={() => setLanguage('en')}
      >
        En
      </button>
      <button
        className="border px-10 py-2 mx-2"
        onClick={() => setLanguage('zh')}
      >
        Zh
      </button>
      <main className="container">
        {translate('scroller').map((scroller, i) => {
          return <Scroller key={i} {...scroller} />;
        })}
      </main>
    </>
  );
};
export default Home;
