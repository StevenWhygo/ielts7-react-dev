import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const About = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('about.title')}</Title>
    </Page>
  );
};
export default About;
