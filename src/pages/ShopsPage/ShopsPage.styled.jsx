import styled from 'styled-components';

export const ShoptWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow: hidden;
  background-color: #fdf9f6;
  border-radius: 30px;
  box-shadow: 7px 7px 14px #2e2e2e24, -7px -7px 14px #2e2e2e24;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ShopAside = styled.aside`
  padding: 12px;

  width: 100%;

  text-align: center;
  border-radius: 30px;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    max-width: fit-content;
    height: 100%;
  }

  &.mobile-hidden {
    transform: translateX(-100%);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    transition: transform 300ms ease-in-out;
    &.active {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    box-shadow: 7px 7px 14px #2e2e2e24;
  }
`;

export const ShopSection = styled.section`
  padding: 12px;
  width: 100%;
  height: 100%;

  border-radius: 30px;
`;
