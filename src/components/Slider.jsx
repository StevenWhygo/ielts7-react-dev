import { useState } from 'react';

const Slider = ({ sliderImgs }) => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(sliderImgs);

  return (
    <div>
      {sliderImgs.map((img, i) => {
        return (
          <img
            key={i}
            className="w-screen"
            src={img.src}
            sizes="100vw"
            srcSet={img.srcset.map((set, i) => {
              return ` ${set}`;
            })}
            alt={img.alt}
          />
        );
      })}
    </div>
  );
};
export default Slider;
