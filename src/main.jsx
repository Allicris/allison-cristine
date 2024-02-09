import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

//Importing all the necessary content to navigate to
// import About from './pages/About.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Resume from './pages/Resume.jsx';
// import Contact from './pages/Contact.jsx';
// import Error from './pages/Error.jsx';
//This will be defining the routes and which components will be responding to 
// the defined URL.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
