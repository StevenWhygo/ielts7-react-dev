import { Link, useNavigate } from 'react-router-dom';
import Picture from './Picture';
import { IconContext } from 'react-icons';

// review / grammar
import { MdRateReview } from 'react-icons/md';
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
// cart
import { MdOutlineShoppingCart } from 'react-icons/md';
// feedback
import { MdFeedback } from 'react-icons/md';
// help
import { MdHelp } from 'react-icons/md';
// group
import { MdGroup } from 'react-icons/md';
// speak
import { MdSms } from 'react-icons/md';
// score
import { MdScoreboard } from 'react-icons/md';
// notes
import { MdNotes } from 'react-icons/md';

const Card = ({ card, style, type }) => {
  const navigate = useNavigate();

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
      case 'feedback':
        return <MdFeedback />;
      case 'help':
        return <MdHelp />;
      case 'group':
        return <MdGroup />;
      case 'speak':
        return <MdSms />;
      case 'score':
        return <MdScoreboard />;
      case 'notes':
        return <MdNotes />;
      default:
        break;
    }
  };

  const Header = {
    course: function (card) {
      const { title, color, image, links } = card;
      console.log(image);

      return (
        <header className="relative rounded-t-sm">
          <div className="w-full h-[200px] overflow-hidden rounded-t-sm">
            <div
              className="course__bg  rounded-t-sm"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => navigate(links.page.url)}
              title={links.page.title}
            ></div>
          </div>
        </header>
      );
    },
    teacher: function (card) {
      const { title, subtitle, image } = card;
      return (
        <header>
          <h2 className="py-2 mb-4 font-medium text-2xl text-center  bg-stone-700 text-stone-50 rounded-top-sm">
            {title}
          </h2>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="mx-auto max-w-[175px] h-fit aspect-square rounded-full bg-center bg-contain bg-no-repeat bg-slate-100"
          ></div>
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
          <ul className="flex flex-col border rounded-sm">
            {list.map((item, i) => {
              return (
                <li
                  key={i}
                  className="list__item flex items-center w-full py-2"
                >
                  <span className="px-2">
                    <IconContext.Provider
                      value={{
                        color: '#1e293b',
                        size: '2rem',
                      }}
                    >
                      {fetchIcon(item.icon)}
                    </IconContext.Provider>
                  </span>
                  <span className="text-[15px] font-semibold">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
    teacher: function (card) {
      const { title, text, links } = card;
      return (
        <div className="flex flex-col justify-between px-4 text-base">
          <p className="leading-snug pl-4 border-l">
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
      const { links } = card;

      return (
        <footer className="flex gap-2 px-4 pb-4">
          {links.trial && (
            <Link
              className="relative flex justify-center items-center w-full h-10 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100 rounded-sm"
              to={{
                pathname: links.trial.url,
              }}
            >
              {links.trial.title}
            </Link>
          )}
          <button className="relative flex justify-center items-center w-full h-10 rounded-sm border-yellow bg-yellow-500 text-slate-50 text-base font-bold opacity-100">
            <IconContext.Provider
              value={{
                color: '#1e293b',
                size: '2rem',
              }}
            >
              <MdOutlineShoppingCart />
            </IconContext.Provider>
          </button>
        </footer>
      );
    },
    teacher: function (card) {
      return (
        <footer className="flex px-4 pb-4">
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
