import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import teachers from '../../data/TEACHERS.json';
import testimonials from '../../data/TESTIMONIALS.json';
import courses from '../../data/COURSES.json';

// Icons
import { FiEdit } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        <section>
          <h2 className={courses.scroller.title.style}>
            {courses.scroller.title.text}
          </h2>
          <div className={courses.scroller.style.section}>
            {courses.cards.map((card, i) => {
              return (
                <Card
                  key={i}
                  card={card}
                  style={courses.scroller.style}
                  type={courses.scroller.type}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className={teachers.scroller.title.style}>
            {teachers.scroller.title.text}
          </h2>
          <div className="media-scroller snaps-inline">
            {teachers.cards.map((card, i) => {
              return (
                <Card
                  key={i}
                  card={card}
                  style={teachers.scroller.style}
                  type={teachers.scroller.type}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="px-4 text-3xl border-b font-bold">Tests</h2>
          <div className="media-scroller snaps-inline">
            {testimonials.cards.map((card, i) => {
              return (
                <Card
                  key={i}
                  card={card}
                  style={testimonials.scroller.style}
                  type={testimonials.scroller.type}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className={testimonials.scroller.title.style}>
            {testimonials.scroller.title.text}
          </h2>
          <div className="media-scroller snaps-inline">
            {testimonials.cards.map((card, i) => {
              return (
                <Card
                  key={i}
                  card={card}
                  style={testimonials.scroller.style}
                  type={testimonials.scroller.type}
                />
              );
            })}
          </div>
        </section>
        {/* <section id="skills">
          <div className="writing">
            <h2>Writing</h2>
          </div>
          <div id="reading">
            <h2>Reading</h2>
          </div>
          <div id="speaking">
            <h2>Speaking</h2>
          </div>
        </section> */}
      </main>
    </>
  );
};
export default Home;
