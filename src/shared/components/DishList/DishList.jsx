import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getByCategory } from '../../../redux/menu/operations';
import {
    selectMenu,
    // selectMenuIsLoading,
    // selectMenuError,
} from '../../../redux/menu/selectors';
import { selectCurrentShop } from '../../../redux/shops/selectors';

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

    // const isLoading = useSelector(selectMenuIsLoading);
    // const error = useSelector(selectMenuError);
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

    return (
        <>
            <DishListStyled>
                {menu.map(({ _id, name, description, image, price }) => (
                    <DishItem key={_id}>
                        <div>
                            <img src={image} alt={name} />
                        </div>
                        <DishTitle>{name}</DishTitle>
                        <PriceWrapper>
                            <p>Ціна: {price}₴</p>
                            <Button
                                text="У кошик"
                                hendleClicker={() => console.log('click')}
                            />
                        </PriceWrapper>
                    </DishItem>
                ))}
            </DishListStyled>
        </>
    );
};

export default DishList;
