import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Contact = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('contact.title')}</Title>
    </Page>
  );
};
export default Contact;
