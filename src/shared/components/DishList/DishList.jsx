import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { getByCategory, getAllBySHopId } from '../../../redux/menu/operations';
import {
  selectMenu,
  selectMenuIsLoading,
  selectTotalHints,
} from '../../../redux/menu/selectors';
import { selectCurrentShop } from '../../../redux/shops/selectors';
import { addToCart } from 'redux/cart/operations';

import PageContext from 'shared/contexts/PageContext';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import {
  DishListStyled,
  DishItem,
  DishTitle,
  PriceWrapper,
  DishListWrapper,
} from './DishList.styled';

const DishList = () => {
  const { page, setPage } = useContext(PageContext);
  const { category } = useParams();
  const menu = useSelector(selectMenu);
  const currentShop = useSelector(selectCurrentShop);
  const totalHints = useSelector(selectTotalHints);
  const hints = menu.length;

  const isLoading = useSelector(selectMenuIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentShop) return;
    if (!category) {
      dispatch(getAllBySHopId({ page, shop: currentShop._id }));
      return;
    }

    dispatch(getByCategory({ page, category, shop: currentShop._id }));
  }, [category, currentShop, dispatch, page]);

  const handleButtonClick = data => {
    dispatch(addToCart(data));
  };

  return (
    <DishListWrapper>
      <DishListStyled>
        {menu.map(({ _id, name, description, image, price, shop }) => (
          <DishItem key={_id}>
            <img loading="lasy" src={image} alt={name} />
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
      {hints < totalHints && (
        <Button
          text="Показати ще"
          hendleClicker={() => setPage(prevState => (prevState += 1))}
        />
      )}
      {isLoading && <Loader />}
    </DishListWrapper>
  );
};

export default DishList;
