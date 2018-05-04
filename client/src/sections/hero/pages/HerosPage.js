import React from 'react';
import { Link } from 'react-router-dom';
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
                    {heros.map(({_id, name, dob, website}) => (
                        <tr>
                            <td><Link to={`/hero/${_id}`}>{name}</Link></td>
                            <td>{dob}</td>
                            <td><a href={website} target="_blank">{website}</a></td>
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