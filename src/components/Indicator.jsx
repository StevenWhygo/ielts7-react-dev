import Button from './Button';

const Indicator = ({ count, slideIndex, slideHandler }) => {
  return (
    <div className="indicators">
      {[...Array(count).keys()].map((key) => {
        return (
          <Button
            key={key}
            type="indicator"
            selected={slideIndex === key + 1 ? true : false}
            handleClick={(e) => slideHandler(e.target.name)}
          />
        );
      })}
    </div>
  );
};
export default Indicator;
