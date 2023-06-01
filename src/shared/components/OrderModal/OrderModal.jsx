import { useSelector } from 'react-redux';
import { selectOrderList, selectIsOrderLoading } from 'redux/cart/selectors';

import Title from '../Title/Title';
import {
  TableWrapper,
  Appreciation,
  OrderModalButton,
  TotalPrice,
} from './OrderModal.styled';

const OrderModal = () => {
  const isLoading = useSelector(selectIsOrderLoading);
  const { order } = useSelector(selectOrderList);
  const totalPrice = order.reduce((acc, { price, orderedQuantity }) => {
    acc += price * orderedQuantity;
    return acc;
  }, 0);

  return (
    <>
      {!isLoading && (
        <>
          <Title title="Список товарів" />
          <TableWrapper>
            <table>
              <thead>
                <tr>
                  <th>Назва товару</th>
                  <th>Кількість</th>
                  <th>Ціна</th>
                </tr>
              </thead>
              <tbody>
                {order.map(({ name, price, orderedQuantity }) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{orderedQuantity}</td>
                    <td>{price * orderedQuantity}₴</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
          <TotalPrice>Загальна ціна: {totalPrice}₴</TotalPrice>

          <Appreciation>
            Ваше замовлення продубльовано на Вашу електронну пошту
          </Appreciation>
          <OrderModalButton to="/">На головну</OrderModalButton>
        </>
      )}
    </>
  );
};

export default OrderModal;
