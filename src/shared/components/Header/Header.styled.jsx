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
  position: relative;
  padding: 12px 0;

  color: #2e2e2e;
  font-size: 20px;
  transition: color 300ms ease-in-out;

  &.active,
  &:hover {
    color: #f09440;
  }
`;

export const OrderedQuantity = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  width: 20px;
  height: 20px;

  font-size: 12px;
  border-radius: 50%;
  background-color: #2e2e2e;
  color: #fdf9f6;
  transform: translate(110%, 50%);
  transition: background-color 300ms ease-in-out;

  ${HeaderNavLink}.active &,
  ${HeaderNavLink}:hover & {
    background-color: #f09440;
  }
`;
