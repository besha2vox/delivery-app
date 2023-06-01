import styled from 'styled-components';

export const ShoptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ShopAside = styled.aside`
  position: relative;
  padding: 12px;
  width: 100%;

  text-align: center;
  box-shadow: 3px -3px 14px #2e2e2e24, -3px 3px 14px #2e2e2e24;
  border-radius: 30px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    max-width: fit-content;
    height: 100%;
  }
`;

export const ShopSection = styled.section`
  padding: 12px;
  width: 100%;
  height: 100%;

  box-shadow: 3px -3px 14px #2e2e2e24, -3px 3px 14px #2e2e2e24;
  border-radius: 30px;
`;
