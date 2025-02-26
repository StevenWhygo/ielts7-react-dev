import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const NotFound = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('notfound.title')}</Title>
    </Page>
  );
};
export default NotFound;
