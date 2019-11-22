import React from 'react';
import userContainer from './modules/user/container/userContainer';
import { LoginContainer } from './modules/login/container';

const Notifications = () => <h2>Notifications</h2>;
const Plugins = () => <h2>Plugins</h2>;
const Tests = () => <h2>Tests</h2>;

const routes = [
  {
    path: '/notifications',
    component: Notifications,
  },
  {
    path: '/plugins',
    component: Plugins,
  },
  {
    path: '/user',
    component: userContainer,
  },
  {
    path: '/tests',
    component: Tests,
  },
  {
    path: '/',
    component: userContainer,
  },
  {
    path: '/login',
    component: LoginContainer,
  },
];
export default routes;
