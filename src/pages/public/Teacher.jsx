import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import Page from '../../components/Page';

const Teacher = () => {
  const route = useParams();
  const name = route.name.split('-');
  return (
    <Page>
      <Title>
        {name.map(
          (part) => `${part.charAt(0).toUpperCase() + part.substring(1)} `
        )}
      </Title>
    </Page>
  );
};
export default Teacher;
