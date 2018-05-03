import React from 'react';

export const Loading = (props) => (
    <span className="loading-dots">Loading...</span>
)

export const withLoadingWrapper = Component => props => {
    if (typeof(global.it)==='function') {
        // test environment; skip the transition
        return <Component {...props}/>;
    }
    if (props.loading) return <Loading/>;
    
    return (<Component {...props}/>);
}