import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import useSlider from '../../hooks/useSlider';
import { IconContext } from 'react-icons';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';
import { GoDotFill } from 'react-icons/go';

const Carousel = ({ slides, cards }) => {
  const carouselRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const {
    handleSetSlider,
    handleNextSlide,
    handleIndex,
    handleOffset,
    handleCurrentSlides,
    index,
    offset,
    currentSlides,
    isSet,
  } = useSlider();

  useEffect(() => {
    carouselRef.current.style.left = `${-100}%`;
    handleSetSlider({
      index: 0,
      offset: -100,
      currentSlides: [slides[slides.length - 1], slides[0], slides[1]],
      slides: slides,
      slider: carouselRef.current,
    });
  }, []);

  const arrows = [
    {
      attributes: {
        id: 'left',
        className:
          'block absolute inset-y-0 transition-opacity pr-12 hover:opacity-60',
        ariaLabel: `View Image ${index}`,
      },
      ref: leftArrowRef,
      icon: <TfiAngleLeft />,
    },
    {
      attributes: {
        id: 'right',
        className:
          'block absolute inset-y-0 right-0 pl-12 transition-opacity hover:opacity-60',
        ariaLabel: `View Image ${index}`,
      },
      ref: rightArrowRef,
      icon: <TfiAngleRight />,
    },
  ];

  const nextSlide = (e) => {
    if (e.target.id === 'right') {
      if (index < slides.length - 1) {
        handleNextSlide({
          index: index + 1,
          offset: -100,
          isSet: true,
        });
      } else {
        handleNextSlide({ index: 0, offset: -100, isSet: true });
      }
    } else if (e.target.id === 'left') {
      if (index > 0) {
        handleNextSlide({
          index: index - 1,
          offset: 100,
          isSet: true,
        });
      } else {
        handleNextSlide({
          index: slides.length - 1,
          offset: 0,
          isSet: true,
        });
      }
    } else {
      handleNextSlide({
        index: parseInt(e.target.id),
        offset: -100,
        isSet: true,
      });
    }
  };

  return (
    <section className="carousel">
      <div className="relative overflow-hidden">
        <div className="slider" ref={carouselRef}>
          {currentSlides &&
            currentSlides.map((slide, i) => {
              return (
                <div key={i} className="relative">
                  <picture className="relative flex-100">
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
                      className="slide-image"
                      src={slide.img.src}
                      alt={slide.img.alt}
                    />
                  </picture>
                  <>
                    <div className="absolute top-0 p-4 m-4 w-11/12 min-h-44  bg-slate-50 opacity-40"></div>
                    <div className="absolute flex flex-col top-0 p-4 m-4 w-11/12 min-h-44">
                      <header className="font-bold text-xl pb-2 mb-2 border-b border-slate-950">
                        {slide.card.header}
                      </header>
                      {/* <p className="text-sm mb-2">{slide.card.body}</p> */}
                      <div className="mt-auto text-right">
                        <Link
                          className="inline-block w-32 py-2 text-sm text-center border-blue bg-sky-600 text-slate-50 font-bold hover:opacity-80"
                          to={{
                            pathname: `${slide.card.link.to}`,
                          }}
                        >
                          {slide.card.link.value}
                        </Link>
                      </div>
                    </div>
                  </>
                </div>
              );
            })}
        </div>

        <>
          {arrows.map((arrow, i) => {
            return (
              <Button
                key={i}
                attributes={{ ...arrow.attributes }}
                handler={nextSlide}
                ref={arrow.ref}
              >
                <div className="pointer-events-none">
                  <IconContext.Provider
                    value={{
                      color: '#1e293b',
                      size: '3rem',
                    }}
                  >
                    {arrow.icon}
                  </IconContext.Provider>
                </div>
              </Button>
            );
          })}
        </>
        <div className="absolute inset-x-0 bottom-2 flex justify-center items-center gap-2 min-h-8 z-1">
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
                <span className="pointer-events-none">
                  {index === key ? (
                    <IconContext.Provider
                      value={{
                        color: '#0080c8',
                        size: '1.2rem',
                      }}
                    >
                      <GoDotFill />
                    </IconContext.Provider>
                  ) : (
                    <IconContext.Provider
                      value={{
                        color: '#e2e8f0',
                        size: '1.2rem',
                      }}
                    >
                      <GoDotFill />
                    </IconContext.Provider>
                  )}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Carousel;
