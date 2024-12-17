import Page from '../../components/Page';
import Slider from '../../features/slider/Slider';
import images from '../../data/IMAGES.json';

const Home = () => {
  console.log(images);

  return (
    <Page>
      <Slider slides={images.slider} />
    </Page>
  );
};
export default Home;
