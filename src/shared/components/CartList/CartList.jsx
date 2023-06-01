import { useSelector, useDispatch } from 'react-redux';
import { selectCartList } from 'redux/cart/selectors';
import { increment, decrement, removeFromCart } from 'redux/cart/operations';

import { ReactComponent as TrashIcon } from '../../../images/trash-delete-svgrepo-com.svg';
import {
  OrderList,
  OrderItem,
  OrderedQuantityWrapper,
  OrderInfoWrapper,
  OrderedQuantityButton,
  RemoveButton,
} from './CartList.stiled';

const CartList = () => {
  const dispatch = useDispatch();
  const orderList = useSelector(selectCartList);

  const handleIncrement = id => dispatch(increment(id));
  const handleDecrement = id => dispatch(decrement(id));
  const handleRemove = id => dispatch(removeFromCart(id));

  return (
    <OrderList>
      {orderList.map(({ _id, name, orderedQuantity, price, image }) => {
        return (
          <OrderItem key={_id}>
            <img src={image} alt={name} />
            <OrderInfoWrapper>
              <p>{name}</p>
              <OrderedQuantityWrapper>
                <OrderedQuantityButton onClick={() => handleDecrement(_id)}>
                  -
                </OrderedQuantityButton>
                <p>{orderedQuantity}</p>
                <OrderedQuantityButton onClick={() => handleIncrement(_id)}>
                  +
                </OrderedQuantityButton>
              </OrderedQuantityWrapper>
            </OrderInfoWrapper>
            <p>Ціна: {price * orderedQuantity}₴</p>
            <RemoveButton onClick={() => handleRemove(_id)}>
              <TrashIcon />
            </RemoveButton>
          </OrderItem>
        );
      })}
    </OrderList>
  );
};

export default CartList;
