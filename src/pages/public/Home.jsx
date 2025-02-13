import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import teachers from '../../data/TEACHERS.json';
import testimonials from '../../data/TESTIMONIALS.json';
import courses from '../../data/COURSES.json';

import image1 from '../../assets/img/ielts7_online_01.jpg';
import image2 from '../../assets/img/ielts7_online_02.jpg';
import image3 from '../../assets/img/ielts7_online_03.jpg';
import image4 from '../../assets/img/ielts7_online_04.jpg';

// Icons
import { FiEdit } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

const Home = () => {
  const images = [image1, image2, image3, image4];
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        <section>
          <h2 className="mb-8 mx-4 px-4 pb-4 text-3xl border-b font-bold">
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
          <h2 className="mb-8 mx-4 px-4 pb-4 text-3xl border-b font-bold">
            {teachers.scroller.title.text}
          </h2>
          <div className={teachers.scroller.style.section}>
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
          <h2 className="mb-8 mx-4 px-4 pb-4 text-3xl border-b font-bold">
            Tests
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
        <section>
          <h2 className="mb-8 mx-4 px-4 pb-4 text-3xl border-b font-bold">
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
