import React from 'react';
import compose from 'recompose/compose';

import query from '../queries/HeroPage';
import {withQuery} from '../../../helpers';
import Page from '../../../components/wrappers/Page';
import {withLoadingWrapper} from '../../../components/wrappers/withLoadingWrapper';
import HeroRoutes from '../routes';

export const HeroPage = ({hero}) => {

    const {name, dob, website, image} = hero;

    return (
        <Page className="home-page">
            <h1>{`${name}'s`} Page</h1>
            <div style={{maxWidth: '100px'}}>
                <img src={image} style={{maxWidth: '100%'}} />
            </div>
            <dl>
                <dt>Website</dt>
                <dd><a href={website} traget="_blank">{website}</a></dd>
                <dt>DoB</dt>
                <dd>{dob}</dd>
            </dl>
        </Page>
    )
}

export const HOC = compose(
    withQuery(query, 'hero', 'hero', 
        ({match}) => ({variables: {id: match.params.id}})),
    withLoadingWrapper
);


export default HOC(HeroPage);