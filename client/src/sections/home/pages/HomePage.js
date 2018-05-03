import React from 'react';
import compose from 'recompose/compose';

import query from '../queries/HomePage';
import {withQuery} from '../../../helpers';
import Page from '../../../components/wrappers/Page';
import {withLoadingWrapper} from '../../../components/wrappers/withLoadingWrapper';


export const HomePage = ({heros}) => {
    return (
        <Page className="home-page">
            <h1>Home Page</h1>
        </Page>
    )
};

export const HOC = compose(
    withQuery(query, 'heros', ''),
    withLoadingWrapper
);

export default HOC(HomePage);