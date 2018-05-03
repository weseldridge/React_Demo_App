import React from 'react';
import styled from "styled-components";

const AppBar = styled.div`
    width: auto;
    padding: 15px 0;
    background-color: ${props => props.theme.primaryColor };
`;

export default AppBar;