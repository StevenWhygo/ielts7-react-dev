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
      <main className="container">
        {translate('card').map((item, i) => {
          return <Scroller key={i} {...item} />;
        })}
      </main>
    </Page>
  );
};
export default Home;
