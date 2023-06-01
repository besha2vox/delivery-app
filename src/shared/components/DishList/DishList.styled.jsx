import styled from 'styled-components';

export const DishListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  overflow: auto;
  @media screen and (min-width: 768px) {
    margin-left: 12px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2e2e2e70;
    border-radius: 2px;
  }
`;

export const DishItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  gap: 8px;
  width: 100%;
  border-radius: 40px;
  box-shadow: 2px 2px 7px rgba(116, 177, 232, 0.24);
  text-align: center;
  background-color: #fff;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 12px) / 2);
  }
`;

export const DishTitle = styled.h3`
  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
