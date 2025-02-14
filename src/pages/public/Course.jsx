import { useParams } from 'react-router-dom';
import courses from '../../data/COURSES.json';

const Course = () => {
    const route = useParams();
    console.log(courses.pages[route.name].name);
    
    return (
    <section>
        <header>
            <h2>{courses.pages[route.name].name}</h2>
        </header>
    </section>
    )
};
export default Course;
