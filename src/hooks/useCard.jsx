import cardHeader from './services/cardHeader';
import cardBody from './services/cardBody';
import cardFooter from './services/cardFooter';

const useCard = (card) => {

    const fetchCard = (type) => {
      const header = cardHeader(type, card)
      const body = cardBody(type, card)
      const footer = cardFooter(type, card)

      return (
      <>
      {header}
      {body}
      {footer}
      </>
      )
    } 
  return {fetchCard}
};
export default useCard;
