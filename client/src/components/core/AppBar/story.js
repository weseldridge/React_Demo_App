import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppBar from './AppBar';
import AppBarLink from './AppLink';
import AppBarContainer from './AppBarContainer';
import AppBarSide from './AppBarSide';

storiesOf('Nav Bar', module)
  .add('internal link', () => (
    <AppBarLink to="home">Internal</AppBarLink>
  ))
  .add('external link', () => (
    <AppBarLink exact={true} to="http://google.com" >External</AppBarLink>
  ))
  .add('nav bar', () => (
    <AppBar>
        <AppBarContainer>
            <AppBarSide>
                <AppBarLink to="home">Right</AppBarLink>
            </AppBarSide>
            <AppBarSide>
                <AppBarLink to="home">Left</AppBarLink>
            </AppBarSide>
        </AppBarContainer>
    </AppBar>
  ));  