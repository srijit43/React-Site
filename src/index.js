import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Skills from './components/Skills';
import Education from './components/Education';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomeComponent />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "education",
        element: <Education />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

