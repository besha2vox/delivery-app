import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;

  box-shadow: rgba(46, 46, 46, 0.14) 3px -3px 14px,
    rgba(46, 46, 46, 0.14) -3px 3px 14px;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    padding: 24px;

    width: calc(50% - 12px);
    height: 100%;
  }
`;

export const UserInfoLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const UserInfoInput = styled.input`
  padding: 4px 12px;

  border: 1px solid #2e2e2e50;
  border-radius: 40px;
  outline: none;
  transition: border-color 300ms ease-in-out;

  &:focus {
    border-color: #f09440;
  }
`;
