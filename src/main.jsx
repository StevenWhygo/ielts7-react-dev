import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { NavProvider } from './contexts/NavContext.jsx';
import { ViewportProvider } from './contexts/ViewportContext.jsx';
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<App />} />)
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthProvider>
      <ViewportProvider>
        <NavProvider>
          <RouterProvider router={router} />
        </NavProvider>
      </ViewportProvider>
    </AuthProvider>
  </StrictMode>
);
