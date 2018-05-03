import React from 'react';
import styled from "styled-components";

const AppBarContainer = styled.div`
    width: ${props => props.theme.primaryColor };
    display: flex;
    justify-content: space-between;
    max-width: ${props => props.theme.container.maxWidth };
    width: ${props => props.theme.container.width };
    margin: 0 auto;
`;

export default AppBarContainer;