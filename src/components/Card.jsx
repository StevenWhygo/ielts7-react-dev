import { Link } from 'react-router-dom';
import Picture from './Picture';

const Card = ({ content, style, type }) => {
  // console.log(content.image);

  const Header = {
    teacher: function (content) {
      const { title, subtitle, image } = content;
      return (
        <header className="flex justify-between">
          <div>
            <h2 className="font-bold text-xl py-2">{title}</h2>
            <h3 className="text-xs">{subtitle}</h3>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-1/3 max-w-[150px] aspect-square rounded-full bg-center bg-contain bg-no-repeat bg-slate-100"
          ></div>
        </header>
      );
    },
    testimony: function (content) {
      const { sources, image } = content;
      return (
        <header>
          <Picture style={'relative'} sources={sources} image={image} />
        </header>
      );
    },
  };

  const Main = {
    teacher: function (content) {
      const { text, links } = content;
      return (
        <div className="flex flex-col justify-between">
          <p>
            {text}
            <a className="mx-2" href={links.more.to}>
              <span className="font-semibold">{links.more.value}</span>
            </a>
          </p>
        </div>
      );
    },
    testimony: function (content) {
      const { fill, title, color, subtitle, text } = content;

      return (
        <div className="relative">
          <svg
            className="mt-[-90px] mb-[-1px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="350 50 1000 200"
          >
            <path
              fill={fill}
              fillOpacity="1"
              d="M0,192L60,165.3C120,139,240,85,360,74.7C480,64,600,96,720,138.7C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>

          <div
            className={`p-6 ${color}`}
            style={{ backgroundColor: fill, quotes: "'\\00AB' '\\00BB'" }}
          >
            <p className={`italic leading-6`}>
              <q>{text}</q>
            </p>
            <h3 className="text-base p-2 text-right">&#8211; {title}</h3>
          </div>
        </div>
      );
    },
  };

  const Footer = {
    teacher: function (content) {
      return (
        <footer className="flex">
          <Link
            className="relative mt-auto inline-block w-full py-2 rounded-sm text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100"
            to={{
              pathname: content.links.action.to,
            }}
          >
            {content.links.action.value}
          </Link>
        </footer>
      );
    },
    testimony: function (content) {
      const { title, fill, subtitle, text } = content;
      return (
        <footer className="relative" style={{ backgroundColor: fill }}></footer>
      );
    },
  };

  return (
    <article
      className={`${style.article}`}
      style={content.fill && { backgroundColor: content.fill }}
    >
      {Header[type](content)}
      {Main[type](content)}
      {Footer[type](content)}
    </article>
  );
};
export default Card;
