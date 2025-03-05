import Card from './Card';

const Scroller = (props) => {
  const { title, cards, ...rest } = props;
  return (
    <section>
      <h2 className="mb-6 mx-6 pb-2 text-3xl border-b font-semibold text-stone-800">
        {title}
      </h2>
      <div className="media-scroller snaps-inline">
        {cards.map((data, i) => {
          return <Card key={i} {...data} {...rest} />;
        })}
      </div>
    </section>
  );
};
export default Scroller;
