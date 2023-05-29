import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getShops } from '../../../redux/shops/operations';
import {
    selectAllShops,
    // selectShopIsLoading,
    // selectShopError,
} from '../../../redux/shops/selectors';

import ButtonImage from '../ButtonImage/ButtonImage';
import { ShopsList, ShopItem } from './ShopList.styled';

const ShopList = () => {
    const shops = useSelector(selectAllShops);
    // const isLoading = useSelector(selectShopIsLoading);
    // const error = useSelector(selectShopError);
    const dispatch = useDispatch();

    useEffect(() => {
        const getShopList = async () => {
            await dispatch(getShops());
        };
        getShopList();
    }, [dispatch]);

    return (
        <>
            {!!shops && (
                <ShopsList>
                    {shops.map(({ name, logo, _id }) => (
                        <ShopItem key={_id}>
                            <ButtonImage path={_id} name={name} logo={logo} />
                        </ShopItem>
                    ))}
                </ShopsList>
            )}
        </>
    );
};

export default ShopList;
