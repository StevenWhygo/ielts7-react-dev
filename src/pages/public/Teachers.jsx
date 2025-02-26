import Page from '../../components/Page';
import Title from '../../components/Title';
import useTranslation from '../../hooks/useTranslation';
const Teachers = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('teachers.title')}</Title>
    </Page>
  );
};
export default Teachers;
