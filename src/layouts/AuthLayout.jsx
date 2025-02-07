import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
