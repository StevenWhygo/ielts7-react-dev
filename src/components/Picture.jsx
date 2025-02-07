const Picture = ({ style, sources, image }) => {
  return (
    <picture className={style}>
      {sources.map((source, i) => {
        return (
          <source
            key={i}
            type={source.type}
            media={source.media}
            srcSet={source.srcset}
          />
        );
      })}
      <img className={image.style} src={image.src} alt={image.alt} />
    </picture>
  );
};
export default Picture;
