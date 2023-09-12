import ReactDOM from 'react-dom/client';
//Setting up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Importing all the necessary content to navigate to
import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

//This will be defining the routes and which components will be responding to 
// the defined URL.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
      path: '/Portfolio',
      element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
