import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Privacy = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('privacy.title')}</Title>
    </Page>
  );
};
export default Privacy;
