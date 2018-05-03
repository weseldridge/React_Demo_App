import React from 'react';
import compose from 'recompose/compose';

import query from '../queries/HerosPage';
import {withQuery} from '../../../helpers';
import Page from '../../../components/wrappers/Page';
import {withLoadingWrapper} from '../../../components/wrappers/withLoadingWrapper';

export const HerosPage = ({heros}) => {
    return (
        <Page className="home-page">
            <h1>Heros Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DoB</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {heros.map(({name, dob, website}) => (
                        <tr>
                            <td>{name}</td>
                            <td>{dob}</td>
                            <td>{website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Page>
    )
}

export const HOC = compose(
    withQuery(query, 'heros', 'heros'),
    withLoadingWrapper
);


export default HOC(HerosPage);