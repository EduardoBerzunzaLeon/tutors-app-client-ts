import type { RouteObject } from 'react-router-dom';

import { useRoutes } from 'react-router-dom';
import AdminLayout from '../../screens/admin/adminLayout/AdminLayout';
import BlankLayout from '../../screens/blank/blankLayout/BlankLayout';

import HomeScreen from '../../screens/admin/home/HomeScreen';
import LoginScreen from '../../screens/blank/loginScreen/LoginScreen';
import Private from '../PrivateRoute';
import Public from '../PublicRoute';

const Routes = () => {
  const routesObject: RouteObject[] = [
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Private><HomeScreen /></Private>,
        },
        {
          element: <HomeScreen />,
          path: 'home',
        },
      ],
    },
    {
      path: '/',
      element: <BlankLayout />,
      children: [
        {
          index: true,
          element: <Public><LoginScreen /></Public>,
        },
        {
          element: <Public><LoginScreen /></Public>,
          path: 'login',
        },
      ],
    },
  ];

  const route = useRoutes(routesObject);

  return route;
};

export default Routes;
