import { notificationsTypes } from '../../helpers';

const {success, info, warning, error} = notificationsTypes;

export const buttonClickedNote = {
    title: 'Yeah!',
    message: 'You clicked a button',
    type: success
};

export const badButtonClickedNote = {
    title: 'Noooo!',
    message: 'You clicked the wrong button',
    type: error
};