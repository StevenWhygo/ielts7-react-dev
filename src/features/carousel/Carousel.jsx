import { useLayoutEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { IconContext } from 'react-icons';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { FaRegCircle } from 'react-icons/fa6';
import { FaRegCircleDot } from 'react-icons/fa6';

const Carousel = ({ slides, cards }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const arrows = [
    {
      attributes: {
        id: 'left',
        className: 'arrow transition-opacity hover:opacity-60',
        ariaLabel: `View Image ${slideIndex}`,
      },
      ref: leftArrowRef,
      icon: <TfiAngleLeft />,
    },
    {
      attributes: {
        id: 'right',
        className: 'arrow right-0 transition-opacity hover:opacity-60',
        ariaLabel: `View Image ${slideIndex}`,
      },
      ref: rightArrowRef,
      icon: <TfiAngleRight />,
    },
  ];

  const nextSlide = (e) => {
    if (e.target.id === 'right') {
      // right arrow
      setSlideIndex((prev) => (prev < 2 ? prev + 1 : prev));
    } else if (e.target.id === 'left') {
      // left arrow
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else {
      // slide indicators
      setSlideIndex(parseInt(e.target.id));
    }
  };

  useLayoutEffect(() => {
    // switch slide: update translate property value on slide index change
    carouselRef.current.style.translate = `${-100 * slideIndex}%`;
  }, [slideIndex]);

  return (
    <section className="carousel">
      <div className="relative overflow-hidden">
        <div
          className="flex max-w-full scroll-smooth slide-transition touch-none"
          ref={carouselRef}
        >
          {slides.map((slide, i) => {
            return (
              <picture key={i} className="relative flex-100">
                {slide.sources.map((source, i) => {
                  return (
                    <source
                      key={i}
                      srcSet={source.srcset}
                      media={source.media}
                    />
                  );
                })}
                <img
                  src={slide.img.src}
                  className="slide-image"
                  alt={slide.img.alt}
                />
                <div className="absolute top-0 h-12 ">
                  <div>{cards[i].header}</div>
                  <Link
                    to={{
                      pathname: `${cards[i].link}`,
                    }}
                  >
                    {cards[i].link.value}
                  </Link>
                </div>
              </picture>
            );
          })}
        </div>
        {/* Left & Right buttons */}
        {arrows.map((arrow, i) => {
          return (
            <Button
              key={i}
              attributes={{ ...arrow.attributes }}
              handler={nextSlide}
              ref={arrow.ref}
            >
              <IconContext.Provider
                value={{
                  color: 'bg-slate-800',
                  size: '3rem',
                }}
              >
                {arrow.icon}
              </IconContext.Provider>
            </Button>
          );
        })}
        {/* Slide indicator buttons */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-4 min-h-8 z-1">
          {[...Array(slides.length).keys()].map((key) => {
            return (
              <Button
                key={key}
                attributes={{
                  id: key,
                  className: 'indicator',
                  name: 'indicator',
                }}
                handler={nextSlide}
              >
                <IconContext.Provider
                  value={{
                    color: 'bg-slate-800',
                    size: '1.2rem',
                  }}
                >
                  {slideIndex === key ? <FaRegCircleDot /> : <FaRegCircle />}
                </IconContext.Provider>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Carousel;
