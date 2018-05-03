import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = ({to, className, children, isExternal}) => (!isExternal ? 
    (<NavLink to={to} exact={true} activeClassName="active" className={className}>{children}</NavLink>) :
    (<a href={to} className={className} target="_blank">{children}</a>)
);


export const AppBarLink = styled(Link)`
    margin: 0 0.35rem;
    font-size: 1.1rem;
    font-family: ${props => props.theme.font.face.header};
    color: ${props => props.theme.font.inverseColor};
    background-color: ${props => props.theme.primaryColor };
    padding-bottom: 15px;
    text-decoration: none;

    :hover,
    :focus {
        padding-bottom: 12px;
        color: ${props => props.theme.secondaryColors};
        border-bottom: 3px solid ${props => props.theme.secondaryColors};
    }

    &.active {
        padding-bottom: 12px;
        color: ${props => props.theme.secondaryColors};;
        border-bottom: 3px solid ${props => props.theme.secondaryColors};
    }
`;

export default AppBarLink;