import { Route, Routes, Navigate } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import PublicLayout from './layouts/PublicLayout';

// Routes
import PublicRoutes from './routes/PublicRoutes';

// Public pages
import Home from './pages/public/Home';
import Courses from './pages/public/Courses';
import Teachers from './pages/public/Teachers';
import Tests from './pages/public/Tests';

// CSS
import './App.css';
import './index.css';
import './assets/css/style.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route element={<PublicRoutes />}>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="courses" element={<Courses />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="tests" element={<Tests />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
