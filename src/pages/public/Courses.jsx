import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Courses = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('courses.title')}</Title>
    </Page>
  );
};
export default Courses;
