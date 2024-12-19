import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import home from '../../data/HOME.json';

const Home = () => {
  return (
    <Page>
      <Carousel slides={home.carousel.slides} cards={home.carousel.cards} />
    </Page>
  );
};
export default Home;
