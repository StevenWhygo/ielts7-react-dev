import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Signup = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('signup.title')}</Title>
    </Page>
  );
};
export default Signup;
