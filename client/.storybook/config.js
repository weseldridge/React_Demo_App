import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import {ThemeProvider} from "styled-components";
import StoryRouter from 'storybook-react-router';
import { withKnobs } from '@storybook/addon-knobs/react';
import theme from '../src/theme';

import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';

const StyledTheme = (storyFn) => (
    <ThemeProvider theme={theme}>
        { storyFn() }
    </ThemeProvider>
);

addDecorator(StyledTheme);
addDecorator(StoryRouter());

function loadStories() {
  require('../src/components/core/AppBar/story.js');
  require('../src/components/core/Buttons/story.js');
}

configure(loadStories, module);