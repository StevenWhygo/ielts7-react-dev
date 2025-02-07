import { useParams } from 'react-router-dom';
import teachers from '../../data/TEACHERS.json';
const Teacher = () => {
  const route = useParams();
  console.log(teachers.profile[route.name]);

  return (
    <section>
      <header>
        <h2>{teachers.profile[route.name].name}</h2>
      </header>
    </section>
  );
};
export default Teacher;
