const Picture = ({ sources, image }) => {
  const { style, src, alt } = image;
  return (
    <picture className="relative">
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
      <img className={style} src={src} alt={alt} />
    </picture>
  );
};
export default Picture;
