import styled from 'styled-components';

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 24px 12px;
  width: 100%;
  border: 1px solid #2e2e2e50;
  border-radius: 40px;

  & img {
    max-width: 100px;
    border-radius: 40px;
  }
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  height: 100%;

  text-align: center;
`;

export const OrderedQuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  color: #2e2e2e;
  transition: color 300ms ease-in-out;

  & svg {
    fill: currentColor;
    max-height: 100%;
  }

  &:hover {
    color: #d10f0f;
  }
`;

export const OrderedQuantityInput = styled.input`
  width: 200px;
  padding: 4px 12px;
  text-align: center;

  border: 1px solid #2e2e2e50;
  border-radius: 40px;
  outline: none;
  transition: border-color 300ms ease-in-out;

  &:focus {
    border-color: #f09440;
  }
`;
