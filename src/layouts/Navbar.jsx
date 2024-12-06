import { NavLink } from 'react-router-dom';
import data from '../data/ROUTES.json';

const Navbar = () => {
  const { publicRoutes } = data;

  return (
    <nav>
      <ul>
        {publicRoutes.map((route, i) => {
          return (
            <li key={i}>
              <NavLink to={route.to}>{route.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
