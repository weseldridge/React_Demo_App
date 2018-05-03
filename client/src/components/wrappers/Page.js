import React from 'react';
import styled from "styled-components";

export const Page = styled.div`
    max-width: ${props => props.theme.container.maxWidth };
    width: ${props => props.theme.container.width };
    margin: 0 auto;
`;

export default Page;