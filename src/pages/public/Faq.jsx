import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Faq = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('faq.title')}</Title>
    </Page>
  );
};
export default Faq;
