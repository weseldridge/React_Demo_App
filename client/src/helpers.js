import { graphql } from 'react-apollo';
import get from 'lodash/get';
import {NotificationManager} from 'react-notifications';

const mergeOptions = (options, props) => {
    if (typeof(options)!=='function') return options || {};
    return options(props);
}

/**
 *  simple wrapper to run a graphql query and extract a specified prop from response
 * 
 * @param {gql} query - graphql query
 * @param {string} prop - string prop to pass down
 * @param {string} dataPath - path to extract prop from returned data
 * @param {*} options - options to merge into query (variables, etc) - may be function(props) => options
 */
export const withQuery = (query, prop, dataPath, options) => graphql(
    query,
    {
        options: (props) => ({
            fetchPolicy: 'cache-and-network', 
            notifyOnNetworkStatusChange: true, 
            ...mergeOptions(options, props)
        }),
        props: ({data}) => {
            const {loading, error, ...apolloProps} = data;
            if (error) throw(error);
            return {
                loading,
                apolloProps,
                [prop]: dataPath ? get(data, dataPath) : data,
                error
            }
        }
    }
);


export const notificationsTypes = {
    warning: 'warning',
    error: 'error',
    success: 'success',
    info: 'info'
};

export const addNotification = (notifi) => {
    const {title, type, message} = notifi;
    const TIME = 3000;

    switch(type) {
        case notificationsTypes.info:
            NotificationManager.info(message, title, TIME);
            break;
        case notificationsTypes.success:
            NotificationManager.success(message, title, TIME);
            break;
        case notificationsTypes.warning:
            NotificationManager.warning(message, title, TIME);
            break;
        case notificationsTypes.error:
            NotificationManager.error(message, title, TIME);
            break;
    }
};