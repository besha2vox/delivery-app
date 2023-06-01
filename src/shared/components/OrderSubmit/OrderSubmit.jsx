import { useSelector } from 'react-redux';
import { selectOrderPrice } from 'redux/cart/selectors';

import Button from '../Button/Button';
import { Price, OrderSubmitWrapper } from './OrderSubmit.styled';

const OrderSubmit = () => {
  const totalPrice = useSelector(selectOrderPrice);

  return (
    <OrderSubmitWrapper>
      <Price>Загальна сума: {totalPrice}₴</Price>
      <Button type="submit" text="Відправити" />
    </OrderSubmitWrapper>
  );
};

export default OrderSubmit;
