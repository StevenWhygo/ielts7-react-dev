import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Signin = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('signin.title')}</Title>
    </Page>
  );
};
export default Signin;
