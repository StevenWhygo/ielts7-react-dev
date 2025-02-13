import Card from './Card';

const Scroller = ({type, title, style, cards}) => {
  return ( <section>
    <h2 className="mb-6 mx-6 pb-2 text-3xl border-b font-bold text-stone-800">
      {title}
    </h2>
    <div className="media-scroller snaps-inline">
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            card={card}
            style={style}
            type={type}
          />
        );
      })}
    </div>
  </section>)
};
export default Scroller;
