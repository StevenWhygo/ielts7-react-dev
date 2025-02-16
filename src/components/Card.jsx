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
// speak exercises
import { MdSms } from 'react-icons/md';
// score
// import { MdNoteAlt } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
// score outline
import { PiExam } from "react-icons/pi";
// notes
import { MdNotes } from 'react-icons/md';
// price
import { MdOutlineAttachMoney } from "react-icons/md";
// comprehension
// import { MdSpatialAudio } from "react-icons/md";
// import { MdInsertComment } from "react-icons/md";
// import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
// premium
import { MdOutlineShield } from "react-icons/md";
// free
import { MdOutlineNoAccounts } from "react-icons/md";
// account
import { MdOutlineAccountCircle } from "react-icons/md";
// single
import { MdOutlineCropPortrait } from "react-icons/md";
// many
import { MdOutlineContentCopy } from "react-icons/md";
// online course
import { MdDvr } from "react-icons/md";
// writing
import { MdOutlineCreate } from "react-icons/md";
// speak scored
// import { MdSpeakerNotes } from "react-icons/md";
// import { MdOutlineSpeakerNotes } from "react-icons/md";

// results
import { MdBarChart } from "react-icons/md";
// best practice
import { MdAssignmentTurnedIn } from "react-icons/md";

const Card = (props) => {
  const { card, style, type } = props;

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
      case 'score_fill':
        return <PiExamFill />;
      case 'score':
        return <PiExam />;
      case 'essay':
        return <MdNotes />;
      case 'price':
        return <MdOutlineAttachMoney />;
      case 'unregistered':
        return <MdOutlineNoAccounts />;
      case 'registered':
        return <MdOutlineAccountCircle />;
      case 'premium':
        return <MdOutlineShield />;
      case 'single':
        return <MdOutlineCropPortrait />;
      case 'many':
        return <MdOutlineContentCopy />;
      case 'course':
        return <MdDvr />;
      case 'comprehension':
        return <MdOutlineChat />;
      case 'results':
        return <MdBarChart />;
      case 'writing':
        return <MdOutlineCreate />;
      case 'check':
        return <MdAssignmentTurnedIn />;
      default:
        break;
    }
  };

  const Header = {
    course: function (card) {
      const { title, image, links } = card;
      return (
        <header className="rounded-t-sm">
          <div className="w-full">
            <img
              className="w-full rounded-t-sm cursor-pointer hover:opacity-80"
              src={image}
              alt={`${title} Image`}
            />
          </div>
        </header>
      );
    },
    test: function (card) {
      const { title, image, links } = card;
      return (
        <header className="rounded-tr-sm">
          <h2
            style={{ backgroundColor: title.color }}
            className="absolute -top-10 flex justify-center items-center w-1/2 min-h-10 text-lg font-thin text-stone-50 rounded-t-md"
          >
            {title.text}
          </h2>
          <div className="w-full aspect-1.5/1">
            <img
              className="w-full h-auto rounded-tr-sm cursor-pointer hover:opacity-80"
              src={image}
              alt={`${title} Image`}
            />
          </div>
        </header>
      );
    },
    teacher: function (card) {
      const { title, subtitle, image } = card;
      return (
        <header className="relative z-20">
          <h2 className="py-[5px] pb-2 mx-4 mb-4 text-3xl text-center text-stone-700 border-b rounded-top-sm">
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
      const { list } = card;
      return (
        <div className="p-4">
          <ul className="flex flex-col border rounded-sm border-b-0">
            {list.map((item, i) => {
              return (
                <li
                  key={i}
                  className="list__item flex items-center w-full py-1"
                >
                  <span className="px-2">
                    <IconContext.Provider
                      value={{
                        color: 'rgb(41, 37, 36)',
                        size: '2rem',
                      }}
                    >
                      {fetchIcon(item.icon)}
                    </IconContext.Provider>
                  </span>
                  <span
                    className={`${
                      item.icon === 'price'
                        ? 'text-[17px] font-bold'
                        : 'text-[15px] font-semibold'
                    } ml-4 `}
                  >
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
    test: function (card) {
      const { list } = card;
      return (
        <div className="p-4">
          <ul className="flex flex-col border rounded-sm">
            {list.map((item, i) => {
              return (
                <li
                  key={i}
                  className="list__item flex items-center w-full py-1"
                >
                  <span className="px-2">
                    <IconContext.Provider
                      value={{
                        color: 'rgb(41, 37, 36)',
                        size: '2rem',
                      }}
                    >
                      {fetchIcon(item.icon)}
                    </IconContext.Provider>
                  </span>
                  <span
                    className={`${
                      item.icon === 'price'
                        ? 'text-[17px] font-bold'
                        : 'text-[15px] font-semibold'
                    } ml-4 `}
                  >
                    {item.text}
                  </span>
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
            <Link
              className="mx-2"
              to={{
                pathname: links.page.url,
              }}
            >
              <span className="font-semibold">{links.page.text}</span>
            </Link>
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
              className="relative flex justify-center items-center w-full py-1 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
              to={{
                pathname: links.trial.url,
              }}
            >
              {links.trial.text}
            </Link>
          )}
          <button className="relative flex justify-center items-center w-full py-1 border-yellow bg-yellow-400 text-slate-50 text-base font-bold rounded-sm opacity-100">
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
    test: function (card) {
      const { links } = card;
      console.log(links);

      return (
        <footer className="flex gap-2 px-4 pb-4">
          {links.trial ? (
            <Link
              className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
              to={{
                pathname: links.trial.url,
              }}
            >
              {links.trial.text}
            </Link>
          ) : (
            <Link
              className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-green-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
              to={{
                pathname: links.signup.url,
              }}
            >
              {links.signup.text}
            </Link>
          )}
        </footer>
      );
    },
    teacher: function (card) {
      return (
        <footer className="flex px-4 pb-4">
          <Link
            className="relative mt-auto inline-block w-full py-2 rounded-sm text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100"
            to={{
              pathname: card.links.action.url,
            }}
          >
            {card.links.action.text}
          </Link>
        </footer>
      );
    },
    testimony: function (card) {
      const { fill } = card;
      return (
        <footer className="relative" style={{ backgroundColor: fill }}></footer>
      );
    },
  };

  return (
    <article
      className={style}
      style={card.fill && { backgroundColor: card.fill }}
    >
      {Header[type](card)}
      {Main[type](card)}
      {Footer[type](card)}
    </article>
  );
};
export default Card;
