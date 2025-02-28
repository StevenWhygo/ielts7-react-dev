import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import { MenuProvider } from './contexts/MenuContext.jsx';
import { ViewportProvider } from './contexts/ViewportContext.jsx';
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<App />} />)
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <ViewportProvider>
          <MenuProvider>
            <RouterProvider router={router} />
          </MenuProvider>
        </ViewportProvider>
      </AuthProvider>
    </LanguageProvider>
  </StrictMode>
);
