import styled from 'styled-components';

export const CartForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;

  width: 100%;
  height: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 90%;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const EmptyCartText = styled.p`
  text-align: center;
`;
