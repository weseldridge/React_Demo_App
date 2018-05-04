import React from 'react';

import Forgot from './pages/Forgot';
import Login from './pages/Login';
import NewUser from './pages/NewUser';

const AuthRoutes = [
    {
        path: '/auth/new-user',
        component: NewUser
    },
    {
        path: '/auth/forgot-password',
        component: Forgot
    },
    {
        path: '/auth/login',
        component: Login
    }
];

export default AuthRoutes;