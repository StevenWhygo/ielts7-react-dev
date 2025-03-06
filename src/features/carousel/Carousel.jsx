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
import Icon from '../../components/Icon';
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

  const Card = ({ card }) => {
    const { title, text, link } = card;
    return (
      <div className="absolute top-0 flex justify-center w-full min-h-44 min-w-80 p-4 z-10 rounded">
        <div className="absolute p-4 w-11/12 min-h-44 max-w-md min-w-80 bg-slate-50 opacity-40 z-0"></div>
        <div className="absolute p-4 w-11/12 min-h-44 max-w-md min-w-80 flex flex-col">
          <header className="pb-2 mb-2 border-b border-slate-950">
            <h2 className="font-bold text-xl">{title}</h2>
          </header>
          <p className="text-sm mb-2">{text}</p>
          <div className="mt-auto text-right">
            <Link
              className="inline-block w-32 py-2 text-sm text-center border-blue bg-sky-600 text-slate-50 font-bold hover:opacity-80"
              to={{
                pathname: `${link.url}`,
              }}
            >
              {link.text}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const slideHandler = (slide) => {
    containerRef.current.style.transitionDuration = '300ms';
    // Left arrow
    if (slide === 'previous') {
      if (currentIndex <= 1) {
        setTranslateX(0);
        setCurrentIndex(elements.length);
      } else {
        setTranslateX(containerRef.current.clientWidth * (currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      }
    }
    // Right arrow
    else if (slide === 'next') {
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
      setTranslateX(containerRef.current.clientWidth * (slide + 1));
      setCurrentIndex(slide + 1);
    }
  };

  // Auto Play
  useEffect(() => {
    intervalRef.currentIndex = setInterval(() => {
      slideHandler('next');
    }, 5000);

    return () => {
      if (intervalRef.currentIndex) {
        clearInterval(intervalRef.currentIndex);
      }
    };
  });

  const slides = useMemo(() => {
    const items = elements.map((element, i) => {
      return (
        <div key={i} className="slide">
          <Picture sources={element.sources} image={element.image} />
          <Card card={element.card} />
        </div>
      );
    });

    return [
      <div key={elements.length + 1} className="slide">
        <Picture
          sources={elements[elements.length - 1].sources}
          image={elements[elements.length - 1].image}
        />
      </div>,
      ...items,
      <div key={elements.length + 2} className="slide">
        <Picture sources={elements[0].sources} image={elements[0].image} />
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

  return (
    <section className="carousel">
      <div
        className="slider"
        style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
        ref={containerRef}
      >
        {slides}
      </div>
      <>
        <button
          name="previous"
          className="block absolute top-0 bottom-0 cursor-pointer transition-opacity pr-3/12 hover:opacity-60"
          onClick={(e) => slideHandler(e.target.name)}
          // aria-label={`View Image ${currentIndex}`}
        >
          <Icon
            type="left"
            value={{
              color: '#1e293b',
              size: '3rem',
            }}
          />
        </button>
        <button
          name="next"
          className="block absolute top-0 bottom-0 right-0 cursor-pointer transition-opacity pr-3/12 hover:opacity-60"
          onClick={(e) => slideHandler(e.target.name)}
        >
          <Icon
            type="right"
            value={{
              color: '#1e293b',
              size: '3rem',
            }}
          />
        </button>
      </>
      {/* Indicators */}
      <div className="indicators">
        {elements.map((_, i) => {
          return (
            <Button
              key={i}
              layout="indicator"
              name="indicator"
              value={
                <Icon
                  type="indicator"
                  value={{
                    size: '1.2rem',
                    color: currentIndex === i + 1 ? '#0080c8' : '#e2e8f0',
                  }}
                />
              }
              handleClick={(e) => slideHandler(parseInt(i))}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Carousel;
