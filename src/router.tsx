import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { MainLayout } from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default router;

