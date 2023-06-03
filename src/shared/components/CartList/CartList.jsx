import { useSelector } from 'react-redux';
import { selectCartList } from 'redux/cart/selectors';

import CartItem from '../CartItem';
import { OrderList, OrderListWrapper } from './CartList.styled';

const CartList = () => {
  const orderList = useSelector(selectCartList);
  return (
    <OrderListWrapper>
      <OrderList>
        {orderList.map(({ _id, name, orderedQuantity, price, image }) => {
          return (
            <CartItem
              key={_id}
              _id={_id}
              name={name}
              orderedQuantity={orderedQuantity}
              price={price}
              image={image}
            />
          );
        })}
      </OrderList>
    </OrderListWrapper>
  );
};

export default CartList;
