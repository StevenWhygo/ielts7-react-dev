import { Route, Routes, Navigate } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';

// Routes
import PublicRoutes from './routes/PublicRoutes';
import AuthRoutes from './routes/AuthRoutes';

// Public pages
import About from './pages/public/About';
import Cart from './pages/public/Cart';
import Contact from './pages/public/Contact';
import Course from './pages/public/Course';
import Courses from './pages/public/Courses';
import Dashboard from './pages/private/Dashboard';
import Home from './pages/public/Home';
import MockTest from './pages/public/MockTest';
import MockTests from './pages/public/MockTests';
import NotFound from './pages/public/NotFound';
import Signin from './pages/public/Signin';
import Signup from './pages/public/Signup';
import Teacher from './pages/public/Teacher';
import Teachers from './pages/public/Teachers';

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
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:name" element={<Course />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:name" element={<Teacher />} />
            <Route path="mocktests" element={<MockTests />} />
            <Route path="mocktests/:name" element={<MockTest />} />
            <Route path="signin" element={<Signin />} />
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
