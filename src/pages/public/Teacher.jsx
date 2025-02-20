import { useParams } from 'react-router-dom';

const Teacher = () => {
  const route = useParams();

  return (
    <section>
      <header>
        <h2>{route.name.charAt(0).toUpperCase() + route.name.substring(1)}</h2>
      </header>
    </section>
  );
};
export default Teacher;
