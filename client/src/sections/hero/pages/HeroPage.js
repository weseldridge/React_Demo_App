import React from 'react';
import compose from 'recompose/compose';

import query from '../queries/HeroPage';
import {withQuery} from '../../../helpers';
import Page from '../../../components/wrappers/Page';
import {withLoadingWrapper} from '../../../components/wrappers/withLoadingWrapper';
import HeroRoutes from '../routes';

export const HeroPage = ({heros}) => {
    return (
        <Page className="home-page">
            <h1>Hero Page</h1>
            
        </Page>
    )
}

export const HOC = compose(
    withQuery(query, 'heros', 'heros'),
    withLoadingWrapper
);


export default HOC(HeroPage);