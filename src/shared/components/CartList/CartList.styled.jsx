import styled from 'styled-components';

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: auto;
  padding: 24px;

  width: calc(50% - 12px);
  height: 100%;

  box-shadow: rgba(46, 46, 46, 0.14) 3px -3px 14px,
    rgba(46, 46, 46, 0.14) -3px 3px 14px;
  border-radius: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2e2e2e70;
    border-radius: 2px;
  }
`;
