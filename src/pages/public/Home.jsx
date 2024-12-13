import Page from '../../components/Page';
import Slider from '../../components/Slider';
import images from '../../data/IMAGES.json';

const Home = () => {
  console.log(images.slider);

  return (
    <Page>
      <Slider sliderImgs={images.slider} />
    </Page>
  );
};
export default Home;
