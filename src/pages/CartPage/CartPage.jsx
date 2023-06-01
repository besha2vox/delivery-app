import { useSelector } from 'react-redux';
import { selectOrderedQuantity } from 'redux/cart/selectors';

import Title from 'shared/components/Title/Title';
import CartList from 'shared/components/CartList';
import { CartWrapper } from './CartPage.styled';

const CartPage = () => {
  const orderedQuantity = useSelector(selectOrderedQuantity);

  return (
    <CartWrapper>
      <Title title="Кошик" />
      {orderedQuantity ? <CartList /> : <p>Ваш кошик пустий</p>}
    </CartWrapper>
  );
};

export default CartPage;
