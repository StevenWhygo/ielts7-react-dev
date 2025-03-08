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
import Careers from './pages/public/Careers';
import Cart from './pages/public/Cart';
import Contact from './pages/public/Contact';
import Course from './pages/public/Course';
import Courses from './pages/public/Courses';
import Dashboard from './pages/private/Dashboard';
import Faq from './pages/public/Faq';
import Home from './pages/public/Home';
import Map from './pages/public/Map';
import MockTest from './pages/public/MockTest';
import MockTests from './pages/public/MockTests';
import NotFound from './pages/public/NotFound';
import Privacy from './pages/public/Privacy';
import Signin from './pages/public/Signin';
import Signup from './pages/public/Signup';
import Teacher from './pages/public/Teacher';
import Teachers from './pages/public/Teachers';
import Terms from './pages/public/Terms';

// CSS
import './App.css';
import './index.css';

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
            <Route path="mocktests" element={<MockTests />} />
            <Route path="mocktests/:name" element={<MockTest />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:name" element={<Teacher />} />
            <Route path="careers" element={<Careers />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="faq" element={<Faq />} />
            <Route path="map" element={<Map />} />
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
