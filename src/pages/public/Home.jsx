import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../components/Scroller';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import courses from '../../data/COURSES.json';
import tests from '../../data/TESTS.json';
import teachers from '../../data/TEACHERS.json';
import testimonials from '../../data/TESTIMONIALS.json';

const Home = () => {
  const scrollers = [courses, tests, teachers, testimonials];
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        {scrollers.map((scroller, i) => {
          return <Scroller key={i} {...scroller} />;
        })}
      </main>
    </>
  );
};
export default Home;
