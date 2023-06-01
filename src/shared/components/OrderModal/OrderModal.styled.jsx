import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TableWrapper = styled.div`
  margin-bottom: 20px;
  max-height: 50vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2e2e2e70;
    border-radius: 2px;
  }

  & table {
    width: 100%;
    border-collapse: collapse;
  }

  & th,
  & td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  & th {
    background-color: #f5f5f5;
  }
`;

export const TotalPrice = styled.p`
  margin-bottom: 20px;
  margin-left: auto;

  text-align: end;
`;

export const Appreciation = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const OrderModalButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  margin: 0 auto;

  width: fit-content;
  font-weight: 700;
  border-radius: 40px;
  color: #f09440;
  border: 1px solid #f09440;

  transition-property: color, background-color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: #fff;
    background-color: #f09440;
  }
`;
