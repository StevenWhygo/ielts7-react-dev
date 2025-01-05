import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../features/scroller/Scroller';
import home from '../../data/HOME.json';

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Carousel slides={home.carousel.slides} cards={home.carousel.cards} />
      <Scroller cards={home.scroller.cards} />
    </div>
  );
};
export default Home;
