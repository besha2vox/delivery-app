import styled from 'styled-components';

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-height: 100%;
  overflow: auto;
`;

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px 12px;
  width: 100%;
  border-bottom: 1px solid #2e2e2e50;
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
  margin: 0 auto;
  gap: 8px;
  height: 100%;
`;

export const OrderedQuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const OrderedQuantityButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  transition: color 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover {
    color: #f09440;
    box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  }
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
