import { useEffect, useReducer } from 'react';
import { sliderReducer } from '../features/carousel/service/sliderReducer';

const initialState = {
  index: undefined,
  offset: undefined,
  slides: null,
  currentSlides: null,
  isSet: false,
};

const useSlider = () => {
  const [state, dispatch] = useReducer(sliderReducer, initialState);

  const { index, offset, slides, currentSlides, isSet } = state;

  function handleSetSlider(props) {
    dispatch({
      type: 'set-slider',
      payload: {
        ...props,
      },
    });
  }

  function handleNextSlide(props) {
    dispatch({
      type: 'next-slide',
      payload: {
        ...props,
      },
    });
  }

  function handleIsSet(value) {
    dispatch({
      type: 'is-set',
      payload: value,
    });
  }

  useEffect(() => {
    if (isSet) {
      //   setTimeout(() => {
      if (index === 0) {
        handleCurrentSlides([slides[slides.length - 1], slides[0], slides[1]]);
      } else if (index === slides.length - 1) {
        handleCurrentSlides([slides[index - 1], slides[index], slides[0]]);
      } else {
        handleCurrentSlides([
          slides[index - 1],
          slides[index],
          slides[index + 1],
        ]);
      }
      //   }, 300);
    }
  }, [index]);

  function handleIndex(value) {
    dispatch({
      type: 'index',
      payload: value,
    });
  }

  function handleOffset(value) {
    dispatch({
      type: 'offset',
      payload: value,
    });
  }

  function handleCurrentSlides(value) {
    dispatch({
      type: 'current-slides',
      payload: {
        currentSlides: value,
      },
    });
  }

  return {
    handleSetSlider,
    handleNextSlide,
    handleIndex,
    handleOffset,
    handleCurrentSlides,
    offset,
    index,
    currentSlides,
    isSet,
  };
};

export default useSlider;
