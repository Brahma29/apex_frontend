import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import AddVehicle from './pages/Vehicles/Add';
import Scenarios from './pages/Scenarios';
import AddScenario from './pages/Scenarios/Add';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/vehicles/add",
        element: <AddVehicle />,
      },
      {
        path: "/scenarios",
        element: <Scenarios />,
      },
      {
        path: "/scenarios/add",
        element: <AddScenario />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
