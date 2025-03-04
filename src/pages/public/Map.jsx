import Page from '../../components/Page';
import useTranslation from '../../hooks/useTranslation';
import Title from '../../components/Title';
const Map = () => {
  const { translate } = useTranslation('global');
  return (
    <Page>
      <Title>{translate('map.title')}</Title>
    </Page>
  );
};
export default Map;
