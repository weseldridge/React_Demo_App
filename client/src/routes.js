import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeroRoutes from './sections/hero/routes';
import HomeRoutes from './sections/home/routes';


const routes = Array.prototype.concat(
    HeroRoutes,
    HomeRoutes,
);

const RouteConfig = () => (
    <Switch>
        {routes.map(({path, component}) => (<Route key={path} path={path} component={component} />))}
    </Switch>
);

export default RouteConfig;