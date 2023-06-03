import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  font-weight: 700;
  border-radius: 40px;
  color: #f09440;
  border: 1px solid #f09440;

  transition-property: color, background-color, border-color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: #fff;
    background-color: #f09440;
  }

  &:disabled {
    color: #2e2e2e;
    background-color: #2e2e2e60;
    pointer-events: none;
    border-color: #2e2e2e;
  }
`;
