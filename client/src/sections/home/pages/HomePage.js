import React from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';

import query from '../queries/HomePage';
import { buttonClickedNote,
        badButtonClickedNote } from '../notifications';
import Page from '../../../components/wrappers/Page';
import {withQuery, addNotification} from '../../../helpers';
import Button from '../../../components/core/Buttons/Button';
import {withLoadingWrapper} from '../../../components/wrappers/withLoadingWrapper';


export const HomePage = ({heros, buttonClicked, badButtonClicked}) => {
    return (
        <Page className="home-page">
            <h1>Home Page</h1>
            <div style={{maringTop: '2rem'}}>
                <Button onClick={buttonClicked}>Fire Notification</Button>
                <Button onClick={badButtonClicked} inverse={true}>Bad Button</Button>
            </div>
        </Page>
    )
};

export const HOC = compose(
    withQuery(query, 'heros', ''),
    withLoadingWrapper,
    withHandlers({
        buttonClicked: props => event => {
            addNotification(buttonClickedNote);
        },
        badButtonClicked: props => event => {
            addNotification(badButtonClickedNote);
        }
    })
);

export default HOC(HomePage);