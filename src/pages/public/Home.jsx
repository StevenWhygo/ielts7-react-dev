import { useState, useEffect } from 'react';
import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../components/Scroller';
import Card from '../../components/Card';
import useLanguageContext from '../../hooks/context/useLanguageContext';
import useTranslation from '../../hooks/useTranslation';

const Home = () => {
  const { setLanguage } = useLanguageContext();
  const { translate } = useTranslation('global');

  return (
    <Page>
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
    </Page>
  );
};
export default Home;
