import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const MockTests = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('mocktests.title')}</Title>
    </Page>
  );
};
export default MockTests;
