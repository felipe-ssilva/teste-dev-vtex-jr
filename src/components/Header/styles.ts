/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const HeaderLogo = styled(Link)`
    font-size: 32px;
    color: #232323;
    text-transform: uppercase;
    font-weight: 700;
`