import styled from 'styled-components';

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2e2e2e30;
`;

export const ModalWrapper = styled.div`
  position: relative;
  padding: 48px;

  min-width: 400px;
  min-height: 200px;

  background-color: #fdf9f6;
  border-radius: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 20px;
  height: 20px;

  color: #2e2e2e;

  &:hover {
    color: #c52323;
  }

  & svg {
    stroke: currentColor;
  }
`;
