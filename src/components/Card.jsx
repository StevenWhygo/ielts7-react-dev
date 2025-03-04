import useCard from '../hooks/useCard';

const Card = (props) => {
  const { type, style, data } = props;
  const { fetchCard } = useCard(data);
  return (
    <article
      className={style}
      // testimonial card background color
      style={data.fill && { backgroundColor: data.fill }}
    >
      {fetchCard(type)}
    </article>
  );
};
export default Card;
