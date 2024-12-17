import { useEffect, useState, useRef } from 'react';
import Button from '../../components/Button';
import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import { FaRegCircle } from 'react-icons/fa6';
import { FaRegCircleDot } from 'react-icons/fa6';

const Slider = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

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

  useEffect(() => {
    // switch slide: update translate property value on slide index change
    sliderRef.current.style.translate = `${-100 * slideIndex}%`;
  }, [slideIndex]);

  return (
    <section className="slider">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full flex slide-image-transion"
          ref={sliderRef}
        >
          {slides.map((slide, i) => {
            return (
              <picture key={i} className="slide">
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
                  ref={sliderRef}
                />
              </picture>
            );
          })}
        </div>
        <button
          id="left"
          className="slider-btn transition-opacity hover:opacity-60"
          onClick={nextSlide}
        >
          <IconContext.Provider
            value={{
              color: '#1F2937',
              size: '2rem',
            }}
          >
            <FaChevronLeft />
          </IconContext.Provider>
        </button>
        <button
          id="right"
          className="slider-btn right-0 transition-opacity hover:opacity-60"
          onClick={nextSlide}
        >
          <IconContext.Provider
            value={{
              color: '#1F2937',
              size: '2rem',
            }}
          >
            <FaChevronRight />
          </IconContext.Provider>
        </button>

        <div className="absolute inset-x-0 bottom-1 flex justify-center items-center gap-4 min-h-8 z-10">
          {[...Array(slides.length).keys()].map((key) => {
            return (
              <button
                key={key}
                id={key}
                name="indicator"
                className="indicator"
                onClick={nextSlide}
              >
                {slideIndex === key ? <FaRegCircleDot /> : <FaRegCircle />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Slider;
