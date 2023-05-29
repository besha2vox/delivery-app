import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderList = styled.ul`
    display: flex;
    column-gap: 30px;

    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`;

export const HeaderNavLink = styled(NavLink)`
    padding: 12px 0;
    color: #2e2e2e;
    font-size: 20px;
    transition: color 300ms ease-in-out;

    &.active,
    &:hover {
        color: #f09440;
    }
`;
