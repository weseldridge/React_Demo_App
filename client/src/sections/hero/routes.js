import React from 'react';

import HeroPage from './pages/HeroPage';
import HerosPage from './pages/HerosPage';

const HeroRoutes = [
    {
        path: '/heros',
        component: HerosPage
    },
    {
        path: '/hero/:slug',
        component: HeroPage
    }
];

export default HeroRoutes;