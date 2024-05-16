import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import AddVehicle from './pages/Vehicles/Add';
import Scenarios from './pages/Scenarios';
import AddScenario from './pages/Scenarios/Add';
import Root from './pages';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/vehicles/add",
        element: <AddVehicle />,
      },
      {
        path: "/vehicles/update/:id",
        element: <AddVehicle />,
      },
      {
        path: "/scenarios",
        element: <Scenarios />,
      },
      {
        path: "/scenarios/update/:id",
        element: <AddScenario />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
