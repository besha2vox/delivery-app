import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeOrder } from 'redux/cart/operations';
import {
  selectOrderedQuantity,
  selectCartList,
  selectOrderPrice,
  selectUserInfo,
  selectIsOrderLoading,
} from 'redux/cart/selectors';

import Loader from 'shared/components/Loader/Loader';
import Modal from 'shared/components/Modal/Modal';
import OrderModal from 'shared/components/OrderModal/OrderModal';
import NotValidModal from 'shared/components/NotValidModal/NotValidModal';
import CartList from 'shared/components/CartList';
import OrderedForm from 'shared/components/OrderedForm/OrderedForm';
import OrderSubmit from 'shared/components/OrderSubmit/OrderSubmit';
import { CartForm, FormWrapper, EmptyCartText } from './CartPage.styled';

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({});
  const orderedQuantity = useSelector(selectOrderedQuantity);
  const orderlist = useSelector(selectCartList);
  const totalPrice = useSelector(selectOrderPrice);
  const user = useSelector(selectUserInfo);
  const isLoading = useSelector(selectIsOrderLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValid = Object.values(error).every(value => !value);
  console.log({ isValid });
  const handleSubmit = e => {
    e.preventDefault();

    if (!isValid) {
      setIsModalOpen(true);
      return;
    }

    const order = orderlist.filter(
      ({ orderedQuantity }) => orderedQuantity > 0
    );

    dispatch(makeOrder({ order, totalPrice, user }));
    setIsModalOpen(true);
  };

  const closeModalAndRedirect = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {orderedQuantity ? (
        <CartForm onSubmit={handleSubmit}>
          <FormWrapper>
            <OrderedForm setError={setError} />
            <CartList />
          </FormWrapper>
          <OrderSubmit />
        </CartForm>
      ) : (
        <EmptyCartText>Ваш кошик пустий</EmptyCartText>
      )}
      {isLoading && <Loader />}
      {!isLoading && isModalOpen && isValid && (
        <Modal handleClick={closeModalAndRedirect}>
          <OrderModal />
        </Modal>
      )}
      {!isLoading && isModalOpen && !isValid && (
        <Modal handleClick={closeModal}>
          <NotValidModal errors={error} />
        </Modal>
      )}
    </>
  );
};

export default CartPage;
