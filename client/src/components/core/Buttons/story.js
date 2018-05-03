import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs/react';

import Button from './Button';
import ButtonLink from './ButtonLink';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('internal link', () => (
        <ButtonLink to="/home" inverse={boolean('inverse', false)}>{text('Lable', 'Home')}</ButtonLink>
    ));

stories.add('external link', () => (
        <ButtonLink to="http://google.com" inverse={boolean('inverse', false)}>{text('Lable', 'Google')}</ButtonLink>
    ));

stories.add('button', () => (
        <Button inverse={boolean('inverse', false)}>{text('Lable', 'Submit')}</Button>
    ));