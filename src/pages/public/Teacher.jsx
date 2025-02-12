import { useParams } from 'react-router-dom';
import teachers from '../../data/TEACHERS.json';
const Teacher = () => {
  const route = useParams();
  return (
    <section>
      <header>
        <h2>{teachers.pages[route.name].name}</h2>
      </header>
    </section>
  );
};
export default Teacher;
