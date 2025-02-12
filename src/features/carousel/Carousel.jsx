import {
  useState,
  useEffect,
  useMemo,
  Children,
  useLayoutEffect,
  useRef,
} from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../components/Picture';
import Indicators from '../../components/Indicators';
import Button from '../../components/Button';
import { IconContext } from 'react-icons';
import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';

const Carousel = ({ elements }) => {
  const containerRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const Label = ({ card }) => {
    return (
      <div className="absolute top-0 flex justify-center w-full min-h-44 min-w-80 p-4 z-10">
        <div className="absolute p-4 w-11/12 min-h-44 max-w-md min-w-80 bg-slate-50 opacity-40 z-0"></div>
        <div className="absolute p-4 w-11/12 min-h-44 max-w-md min-w-80 flex flex-col">
          <header className="pb-2 mb-2 border-b border-slate-950">
            <h2 className="font-bold text-xl">{card.title}</h2>
          </header>
          <p className="text-sm mb-2">{card.text}</p>
          <div className="mt-auto text-right">
            <Link
              className="inline-block w-32 py-2 text-sm text-center border-blue bg-sky-600 text-slate-50 font-bold hover:opacity-80"
              to={{
                pathname: `${card.link.to}`,
              }}
            >
              {card.link.value}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const arrows = [
    {
      attributes: {
        name: 'previous',
        className: 'arrow transition-opacity pr-3/12 hover:opacity-60',
        ariaLabel: `View Image ${currentIndex}`,
      },
      ref: leftArrowRef,
      icon: <TfiAngleLeft />,
    },
    {
      attributes: {
        name: 'next',
        className: 'arrow right-0 pl-3/12 transition-opacity hover:opacity-60',
        ariaLabel: `View Image ${currentIndex}`,
      },
      ref: rightArrowRef,
      icon: <TfiAngleRight />,
    },
  ];

  const nextSlide = (e) => {
    containerRef.current.style.transitionDuration = '300ms';
    // Left arrow
    if (e.target.name === 'previous') {
      if (currentIndex <= 1) {
        setTranslateX(0);
        setCurrentIndex(elements.length);
      } else {
        setTranslateX(containerRef.current.clientWidth * (currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      }
    }
    // Right arrow
    else if (e.target.name === 'next') {
      if (currentIndex >= elements.length) {
        setTranslateX(containerRef.current.clientWidth * (elements.length + 1));
        setCurrentIndex(1);
      } else {
        setTranslateX(containerRef.current.clientWidth * (currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }
    }
    // Indicators
    else {
      const indicator = parseInt(e.target.name);
      setTranslateX(containerRef.current.clientWidth * (indicator + 1));
      setCurrentIndex(indicator + 1);
    }
  };

  const slides = useMemo(() => {
    const items = elements.map((element, i) => {
      return (
        <div key={i} className="slide">
          <Picture sources={element.sources} image={element.image} />
          <Label card={element.card} />
        </div>
      );
    });

    return [
      <div key={elements.length + 1} className="slide">
        <Picture
          sources={elements[elements.length - 1].sources}
          image={elements[elements.length - 1].image}
        />
        <Label card={elements[elements.length - 1].card} />
      </div>,
      ...items,
      <div key={elements.length + 2} className="slide">
        <Picture sources={elements[0].sources} image={elements[0].image} />
        <Label card={elements[0].card} />
      </div>,
    ];
  }, [elements]);

  useEffect(() => {
    const transitionEnd = () => {
      if (currentIndex <= 1) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * currentIndex);
      }

      if (currentIndex >= elements.length) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * elements.length);
      }
    };

    document.addEventListener('transitionend', transitionEnd);

    return () => document.removeEventListener('transitionend', transitionEnd);
  });

  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * currentIndex);
  }, []);

  return (
    <section className="carousel touch-none">
      <div
        className="slider"
        style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
        ref={containerRef}
      >
        {slides}
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
              <IconContext.Provider
                value={{
                  color: '#1e293b',
                  size: '3rem',
                }}
              >
                <div>{arrow.icon}</div>
              </IconContext.Provider>
            </Button>
          );
        })}
      </>

      <Indicators
        count={elements.length}
        slideIndex={currentIndex}
        nextSlide={nextSlide}
      />
    </section>
  );
};
export default Carousel;
