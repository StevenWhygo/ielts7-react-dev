import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Terms = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('terms.title')}</Title>
    </Page>
  );
};
export default Terms;
