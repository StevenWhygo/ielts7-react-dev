import { NavLink } from 'react-router-dom';
import routes from '../../data/ROUTES.json';

const Menu = () => {
  const { publicRoutes } = routes;
  return (
    <ul className="hidden">
      {publicRoutes.map((route, i) => {
        return (
          <li key={i}>
            <NavLink to={route.to}>{route.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;
