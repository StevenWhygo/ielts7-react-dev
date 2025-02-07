import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import teachers from '../../data/TEACHERS.json';
import testimonials from '../../data/TESTIMONIALS.json';

const Home = () => {
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        <section className="mb-8">
          <h2 className="section__title px-4 pb-2 mb-6 text-3xl border-b font-bold">
            Our Teachers
          </h2>
          <div className="media-scroller snaps-inline">
            {teachers.abstract.map((content, i) => {
              return (
                <Card
                  key={i}
                  content={content}
                  style={teachers.scroller.style}
                  type={teachers.scroller.type}
                />
              );
            })}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="section__title px-4 pb-2 mb-6 text-3xl border-b font-bold">
            Testimonials
          </h2>
          <div className="media-scroller snaps-inline">
            {testimonials.abstract.map((content, i) => {
              return (
                <Card
                  key={i}
                  content={content}
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
