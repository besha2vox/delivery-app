import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeOrder } from 'redux/cart/operations';
import {
  selectOrderedQuantity,
  selectCartList,
  selectOrderPrice,
  selectUserInfo,
} from 'redux/cart/selectors';

import Modal from 'shared/components/Modal/Modal';
import OrderModal from 'shared/components/OrderModal/OrderModal';
import Title from 'shared/components/Title/Title';
import CartList from 'shared/components/CartList';
import OrderedForm from 'shared/components/OrderedForm/OrderedForm';
import OrderSubmit from 'shared/components/OrderSubmit/OrderSubmit';
import { CartForm, FormWrapper } from './CartPage.styled';

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderedQuantity = useSelector(selectOrderedQuantity);
  const orderlist = useSelector(selectCartList);
  const totalPrice = useSelector(selectOrderPrice);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const order = orderlist.filter(
      ({ orderedQuantity }) => orderedQuantity > 0
    );

    dispatch(makeOrder({ order, totalPrice, user }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <Title title="Кошик" />
      {orderedQuantity ? (
        <CartForm onSubmit={handleSubmit}>
          <FormWrapper>
            <OrderedForm />
            <CartList />
          </FormWrapper>
          <OrderSubmit />
        </CartForm>
      ) : (
        <p>Ваш кошик пустий</p>
      )}
      {isModalOpen && (
        <Modal handleClick={closeModal}>
          <OrderModal />
        </Modal>
      )}
    </>
  );
};

export default CartPage;
