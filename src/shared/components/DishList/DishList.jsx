import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getByCategory } from '../../../redux/menu/operations';
import { selectMenu, selectMenuIsLoading } from '../../../redux/menu/selectors';
import { selectCurrentShop } from '../../../redux/shops/selectors';
import { addToCart } from 'redux/cart/operations';

import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import {
  DishListStyled,
  DishItem,
  DishTitle,
  PriceWrapper,
} from './DishList.styled';

const DishList = () => {
  const { category } = useParams();
  const menu = useSelector(selectMenu);
  const currentShop = useSelector(selectCurrentShop);

  const isLoading = useSelector(selectMenuIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMenu = async () => {
      if (!currentShop) return;

      await dispatch(
        getByCategory({
          category,
          shop: currentShop._id,
        })
      );
    };
    getMenu();
  }, [category, currentShop, dispatch]);

  const handleButtonClick = data => {
    dispatch(addToCart(data));
  };

  return (
    <>
      <DishListStyled>
        {menu.map(({ _id, name, description, image, price, shop }) => (
          <DishItem key={_id}>
            <div>
              <img loading="lasy" src={image} alt={name} />
            </div>
            <DishTitle>{name}</DishTitle>
            <PriceWrapper>
              <p>Ціна: {price}₴</p>
              <Button
                text="У кошик"
                hendleClicker={() =>
                  handleButtonClick({ _id, name, image, price, shop })
                }
              />
            </PriceWrapper>
          </DishItem>
        ))}
      </DishListStyled>
      {isLoading && <Loader />}
    </>
  );
};

export default DishList;
