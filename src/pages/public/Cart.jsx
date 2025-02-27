import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Cart = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('cart.title')}</Title>
    </Page>
  );
};
export default Cart;
