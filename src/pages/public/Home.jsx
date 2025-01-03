import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../features/scroller/Scroller';
import home from '../../data/HOME.json';

const Home = () => {
  return (
    <Page>
      <Carousel slides={home.carousel.slides} cards={home.carousel.cards} />
      <Scroller elements={home.scroller.elements} />
    </Page>
  );
};
export default Home;
