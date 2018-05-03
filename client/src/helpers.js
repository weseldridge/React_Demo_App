import { graphql } from 'react-apollo';
import get from 'lodash/get';

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
            fetchPolicy: 'network-only', 
            notifyOnNetworkStatusChange: true, 
            ...mergeOptions(options, props)
        }),
        props: ({data}) => {
            const {loading, error, ...apolloProps} = data;
            if (error) throw(error);

            return {
                loading,
                apolloProps,
                [prop]: get(data, dataPath),
                error
            }
        }
    }
);