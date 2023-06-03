import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeFromCart, changeOrderedQuantity } from 'redux/cart/operations';

import { ReactComponent as TrashIcon } from '../../../images/trash-delete-svgrepo-com.svg';
import {
  OrderItem,
  OrderedQuantityWrapper,
  OrderInfoWrapper,
  RemoveButton,
  OrderedQuantityInput,
} from './CartItem.styled';

const CartItem = ({ _id, name, orderedQuantity, price, image }) => {
  const [quntity, setQuantity] = useState(orderedQuantity);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRemove = id => dispatch(removeFromCart(id));
  const handleChange = e => {
    const value = Number(e.target.value);
    setQuantity(value);
    dispatch(changeOrderedQuantity({ _id, orderedQuantity: value }));
  };

  return (
    <OrderItem>
      {viewportWidth >= 768 && <img src={image} alt={name} />}
      <OrderInfoWrapper>
        <p>{name}</p>
        <p>Ціна: {price * orderedQuantity}₴</p>
        <OrderedQuantityWrapper>
          <OrderedQuantityInput
            type="number"
            min={0}
            value={quntity}
            onChange={handleChange}
          />
        </OrderedQuantityWrapper>
      </OrderInfoWrapper>
      <RemoveButton onClick={() => handleRemove(_id)}>
        <TrashIcon />
      </RemoveButton>
    </OrderItem>
  );
};

CartItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  orderedQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CartItem;
