import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Careers = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('careers.title')}</Title>
    </Page>
  );
};
export default Careers;
