import { useState } from 'react';

const Slider = ({ slider }) => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(slider);

  return (
    <div>
      {slider.pictures.map((picture, i) => {
        return (
          <picture key={i}>
            {picture.sources.map((source, i) => {
              return (
                <source key={i} srcSet={source.srcset} media={source.media} />
              );
            })}
            <img
              src={picture.img.src}
              className={picture.img.className}
              alt={picture.img.alt}
            />
          </picture>
        );
      })}
    </div>
  );
};
export default Slider;
