import Page from '../../components/Page';
import Carousel from '../../features/carousel/Carousel';
import Card from '../../components/Card';
import carousel from '../../data/CAROUSEL.json';
import teachers from '../../data/TEACHERS.json';
import testimonies from '../../data/TESTIMONIES.json';

const Home = () => {
  return (
    <>
      <Carousel elements={carousel.elements} />
      <main className="container">
        <section className="media-scroller snaps-inline">
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
        </section>
        <section className="media-scroller snaps-inline">
          {testimonies.abstract.map((content, i) => {
            return (
              <Card
                key={i}
                content={content}
                style={testimonies.scroller.style}
                type={testimonies.scroller.type}
              />
            );
          })}
        </section>
        <section id="skills">
          <div className="writing">
            <h2>Writing</h2>
          </div>
          <div id="reading">
            <h2>Reading</h2>
          </div>
          <div id="speaking">
            <h2>Speaking</h2>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
