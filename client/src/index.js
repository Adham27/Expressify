import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import ProtectedRoute from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import App from './pages/App';
import Profile from './pages/Profile';


const getAccessToken = () => {
  return localStorage.getItem('Token');
}

const isAuthenticated = () => {
  return !!getAccessToken();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    index: true
  },
  {
    path: '/register',
    element: <Register />,
    index: true
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: 'dashboard',
        element: <Home />
      },
      {
        path: 'app',
        element: <App />
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);