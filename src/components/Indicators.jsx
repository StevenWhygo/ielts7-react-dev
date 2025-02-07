import Button from './Button';
import { IconContext } from 'react-icons';
import { GoDotFill } from 'react-icons/go';

const Indicators = ({ count, slideIndex, nextSlide }) => {
  return (
    <div className="indicators">
      {[...Array(count).keys()].map((key) => {
        return (
          <Button
            key={key}
            attributes={{
              id: key,
              name: key,
              className: 'indicator',
            }}
            handler={nextSlide}
          >
            {slideIndex === key + 1 ? (
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
          </Button>
        );
      })}
    </div>
  );
};
export default Indicators;
