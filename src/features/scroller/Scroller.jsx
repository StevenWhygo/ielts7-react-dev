import { TfiUnlock } from 'react-icons/tfi';
import { TfiInfinite } from 'react-icons/tfi';
import { TfiReload } from 'react-icons/tfi';
import { TfiStatsUp } from 'react-icons/tfi';
import { TfiWorld } from 'react-icons/tfi';
import { FaUniversity } from 'react-icons/fa';
const Scroller = ({ elements }) => {
  const icons = {
    school: <FaUniversity />,
    score: <TfiStatsUp />,
    unlimited: <TfiReload />,
    best: <TfiWorld />,
  };

  return (
    <section className="media-scroller">
      {elements.map((element, i) => {
        return (
          <article key={i} className="media-element">
            <header>
              <h2 className="font-bold text-xl text-center">{element.title}</h2>
            </header>
            <div className="">
              {element.text.map((line, i) => {
                return (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default Scroller;
