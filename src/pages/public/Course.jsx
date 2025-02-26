import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
const Course = () => {
  const route = useParams();

  return (
    <section>
      <header>
        <Title>
          {route.name.charAt(0).toUpperCase() + route.name.substring(1)}
        </Title>
      </header>
    </section>
  );
};
export default Course;
