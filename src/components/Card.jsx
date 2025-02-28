import { Link } from 'react-router-dom';
import useCard from '../hooks/useCard';

const Card = (props) => {
  const { type, style, card } = props;
  const { fetchCard } = useCard(card);
  return (
    <article
      className={style}
      // testimonial card background color
      style={card.fill && { backgroundColor: card.fill }}
    >
      {fetchCard(type)}
    </article>
  );
};
export default Card;
