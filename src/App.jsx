import { Route, Routes, Navigate } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';

// Routes
import PublicRoutes from './routes/PublicRoutes';
import AuthRoutes from './routes/AuthRoutes';

// Public pages
import Home from './pages/public/Home';
import Dashboard from './pages/private/Dashboard';
import NotFound from './pages/NotFound';
import Courses from './pages/public/Courses';
import Course from './pages/public/Course';
import Teachers from './pages/public/Teachers';
import Teacher from './pages/public/Teacher';
import Tests from './pages/public/Tests';
import MockTests from './pages/public/MockTests';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import Cart from './pages/public/Cart';

// CSS
import './App.css';
import './index.css';
import './assets/css/utilities.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route element={<PublicRoutes />}>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:name" element={<Course />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:name" element={<Teacher />} />
            <Route path="tests" element={<Tests />} />
            <Route path="mocktests" element={<MockTests />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Route>
        <Route element={<AuthRoutes />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/me" replace />} />
            <Route path="me" element={<Dashboard />}>
              {/* Auth Pages */}
            </Route>
          </Route>
        </Route>
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
