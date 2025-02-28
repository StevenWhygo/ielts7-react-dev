import Picture from '../../components/Picture';

const cardHeader = (type, card) => {
  const {title, color, image, sources } = card
  switch (type) {
    case 'course':
        return (
          <header className="rounded-t-sm">
            <div className="w-full">
              <img
                className="w-full rounded-t-sm cursor-pointer hover:opacity-80"
                src={image.src}
                alt={image.alt}
              />
            </div>
          </header>
        );
    case 'mocktest': 
    return (
      <header className="rounded-tr-sm">
        <h2
          style={{ backgroundColor: color }}
          className="absolute -top-10 flex justify-center items-center w-1/2 min-h-10 text-lg font-thin text-stone-50 rounded-t-md"
        >
          {title}
        </h2>
        <div className="w-full aspect-1.5/1">
          <img
            className="w-full h-auto rounded-tr-sm cursor-pointer hover:opacity-80"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </header>
    );
    case 'teacher': 
    return (
      <header className="relative z-20">
        <h2 className="py-[5px] pb-2 mx-4 text-3xl text-center text-stone-700 border-b rounded-top-sm">
          {title}
        </h2>
        <div
          style={{ backgroundImage: `url(${image.src})` }}
          className="mx-auto max-w-[175px] h-fit my-4 aspect-square rounded-full bg-center bg-contain bg-no-repeat bg-slate-100"
        ></div>
      </header>
    );
    case 'testimonial':
      return (
        <header>
          <Picture sources={sources} image={image} />
        </header>
      );
    default:
      break;
  }
  };
  export default cardHeader