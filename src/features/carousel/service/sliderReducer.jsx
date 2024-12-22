export const sliderReducer = (state, action) => {
  switch (action.type) {
    case 'set-slider':
      return {
        ...state,
        index: action.payload.index,
        offset: action.payload.offset,
        currentSlides: action.payload.currentSlides,
        slides: action.payload.slides,
      };
    case 'next-slide':
      return {
        ...state,
        index: action.payload.index,
        offset: action.payload.offset,
        isSet: action.payload.isSet,
      };
    case 'current-slides':
      return {
        ...state,
        currentSlides: action.payload.currentSlides,
      };
    case 'is-set':
      return {
        ...state,
        isSet: action.payload.isSet,
      };
    default:
      return null;
  }
};
