import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImageNavLink = styled(NavLink)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding: ${({ isNameShow }) => (isNameShow ? '4px 8px' : '8px')};

  border-radius: 40px;
  background-color: #fdf9f6;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  transition-property: box-shadow, background-color, color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }

  &.active {
    background-color: #f09440;
    color: #fdf9f6;
  }

  & img {
    max-height: 40px;
    border-radius: 50%;
  }
`;
