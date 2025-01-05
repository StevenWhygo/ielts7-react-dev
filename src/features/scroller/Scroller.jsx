import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { TfiUnlock } from 'react-icons/tfi';
import { TfiInfinite } from 'react-icons/tfi';
import { TfiReload } from 'react-icons/tfi';
import { TfiStatsUp } from 'react-icons/tfi';
import { TfiWorld } from 'react-icons/tfi';
import { FaUniversity } from 'react-icons/fa';
const Scroller = ({ cards }) => {
  const icons = {
    school: <FaUniversity />,
    score: <TfiStatsUp />,
    unlimited: <TfiReload />,
    best: <TfiWorld />,
  };

  return (
    <section className="media-scroller snaps-inline">
      {cards.map((card, i) => {
        return (
          <article key={i} className="media-element">
            <header className="">
              <h2 className="font-bold text-xl text-center py-2">
                {card.title}
              </h2>
            </header>
            <div className="absolute top-1/4 left-0 right-0 flex justify-center min-h-72 w-full opacity-20">
              <IconContext.Provider
                value={{
                  color: '#e2e8f0',
                  size: '10rem',
                }}
              >
                {icons[card.icon]}
              </IconContext.Provider>
            </div>
            <div className="flex flex-col justify-between min-h-72">
              {card.text.map((line, i) => {
                return (
                  <p key={i} className="pb-4">
                    {line}
                  </p>
                );
              })}

              <Link
                className="relative mt-auto inline-block w-full py-3 text-center border-blue bg-sky-600 text-slate-50 text-base font-bold opacity-100"
                to={{
                  pathname: card.link.to,
                }}
              >
                {card.link.value}
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default Scroller;
