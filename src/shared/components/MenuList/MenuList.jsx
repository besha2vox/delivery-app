import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    selectCurrentShop,
    // selectShopIsLoading,
    // selectShopError,
} from '../../../redux/shops/selectors';
import { getShopById } from '../../../redux/shops/operations';

import ButtonImage from '../ButtonImage/ButtonImage';
import { CategoryList } from './MenuList.styled';

const MenuList = () => {
    const { shopId } = useParams();
    const shop = useSelector(selectCurrentShop);
    // const isLoading = useSelector(selectShopIsLoading);
    // const error = useSelector(selectShopError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopById(shopId));
    }, [dispatch, shopId]);

    return (
        <>
            {!!shop && (
                <CategoryList>
                    {shop.categories.map(({ _id, name, image }) => (
                        <li key={_id}>
                            <ButtonImage path={name} name={name} logo={image} />
                        </li>
                    ))}
                </CategoryList>
            )}
        </>
    );
};

export default MenuList;
