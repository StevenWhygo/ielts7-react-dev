import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Scroller from '../../components/Scroller';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import teachers from '../../data/TEACHERS.json';
import testimonials from '../../data/TESTIMONIALS.json';
import courses from '../../data/COURSES.json';

// Icons
import { FiEdit } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

const Home = () => {
  const scrollers = [courses, teachers, testimonials];
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        {scrollers.map((scroller, i) => {
          console.log(scroller);

          return (
            <Scroller
              key={i}
              type={scroller.type}
              title={scroller.title}
              style={scroller.style}
              cards={scroller.cards}
            />
          );
        })}
      </main>
    </>
  );
};
export default Home;
