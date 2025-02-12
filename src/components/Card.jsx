import { Link } from 'react-router-dom';
import Picture from './Picture';
import { IconContext } from 'react-icons';

// review / grammar
import { MdRateReview } from 'react-icons/md';
import { MdFeedback } from 'react-icons/md';

// quiz
import { MdQuiz } from 'react-icons/md';

// video
import { MdVideoLibrary } from 'react-icons/md';
// exam
import { MdAssignmentInd } from 'react-icons/md';
// words
import { MdChecklist } from 'react-icons/md';
// exercise
import { MdForum } from 'react-icons/md';
// grammar
import { MdEditSquare } from 'react-icons/md';

const Card = ({ card, style, type }) => {
  const fetchIcon = (type) => {
    switch (type) {
      case 'grammar':
        return <MdForum />;
      case 'exam':
        return <MdAssignmentInd />;
      case 'exercise':
        return <MdEditSquare />;
      case 'quiz':
        return <MdQuiz />;
      case 'video':
        return <MdVideoLibrary />;
      case 'words':
        return <MdChecklist />;

      default:
        break;
    }
  };

  const Header = {
    course: function (card) {
      const { title, level, image, color } = card;

      return (
        <header className="relative">
          {/* <h2 className="absolute top-[-30px] left-0 flex justify-between w-full font-semibold text-stone-50">
            <span
              className="flex justify-center items-center w-1/2 h-[30px]"
              style={{ backgroundColor: title.color }}
            >
              {title.text}
            </span>

            <span
              className="flex justify-center items-center w-1/2 h-[30px]"
              style={{ backgroundColor: level.color }}
            >
              {level.text}
            </span>
          </h2> */}
          <h2
            className="flex justify-between w-full font-semibold text-stone-50 rounded-top-sm "
            style={{ backgroundColor: title.color }}
          >
            <span
              className="flex justify-center items-center w-1/2 h-[40px] rounded-tl-sm"
              style={{ backgroundColor: title.color }}
            >
              {title.text}
            </span>

            <span
              className="flex justify-center items-center w-1/2 h-[40px] rounded-tr-sm"
              style={{ backgroundColor: level.color }}
            >
              {level.text}
            </span>
          </h2>
          <div
            className="relative h-[150px] w-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </header>
      );
    },
    teacher: function (card) {
      const { title, subtitle, image } = card;
      return (
        <header className="">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="mx-auto max-w-[200px] h-fit aspect-square rounded-full bg-center bg-contain bg-no-repeat bg-slate-100"
          ></div>
          <h2 className="font-medium text-2xl py-2 text-center">{title}</h2>
        </header>
      );
    },
    testimony: function (card) {
      const { sources, image } = card;
      return (
        <header>
          <Picture style={'relative'} sources={sources} image={image} />
        </header>
      );
    },
  };

  const Main = {
    course: function (card) {
      const { list, links } = card;
      return (
        <div className="p-4">
          <ul className="flex flex-col gap-2">
            {list.map((item, i) => {
              return (
                <li key={i} className="flex items-center gap-4">
                  <span>
                    {' '}
                    <IconContext.Provider
                      value={{
                        color: '#1e293b',
                        size: '2rem',
                      }}
                    >
                      {fetchIcon(item.icon)}
                    </IconContext.Provider>
                  </span>
                  <span className="text-sm">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
    teacher: function (card) {
      const { text, links } = card;
      return (
        <div className="flex flex-col justify-between pl-3 text-base border-l">
          <p className="leading-snug">
            {text}
            <a className="mx-2" href={links.more.to}>
              <span className="font-semibold">{links.more.value}</span>
            </a>
          </p>
        </div>
      );
    },
    testimony: function (card) {
      const { fill, title, color, subtitle, text } = card;

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
    course: function (card) {
      <footer className="px-4 pb-4"></footer>;
    },
    teacher: function (card) {
      return (
        <footer className="flex">
          <Link
            className="relative mt-auto inline-block w-full py-2 rounded-sm text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100"
            to={{
              pathname: card.links.action.to,
            }}
          >
            {card.links.action.value}
          </Link>
        </footer>
      );
    },
    testimony: function (card) {
      const { title, fill, subtitle, text } = card;
      return (
        <footer className="relative" style={{ backgroundColor: fill }}></footer>
      );
    },
  };

  return (
    <article
      className={style.article}
      style={card.fill && { backgroundColor: card.fill }}
    >
      {Header[type](card)}
      {Main[type](card)}
      {Footer[type](card)}
    </article>
  );
};
export default Card;
