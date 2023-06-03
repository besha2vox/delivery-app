import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getShops } from '../../../redux/shops/operations';
import {
  selectAllShops,
  selectShopIsLoading,
} from '../../../redux/shops/selectors';
import { selectCurrentShop } from 'redux/cart/selectors';

import Loader from '../Loader/Loader';
import ButtonImage from '../ButtonImage/ButtonImage';
import { ShopsList, ShopItem } from './ShopList.styled';

const ShopList = ({ setIsDropDawnOpen }) => {
  const shops = useSelector(selectAllShops);
  const currentShop = useSelector(selectCurrentShop);
  const isLoading = useSelector(selectShopIsLoading);
  const dispatch = useDispatch();

  console.log({ currentShop });

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return (
    <>
      {!!shops && (
        <ShopsList>
          {shops.map(({ name, logo, _id, categories }) => (
            <ShopItem key={_id}>
              <ButtonImage
                handleClicler={() => setIsDropDawnOpen(false)}
                isDisabled={currentShop !== _id && currentShop !== null}
                path={_id}
                name={name}
                logo={logo}
              />
            </ShopItem>
          ))}
        </ShopsList>
      )}
      {isLoading && <Loader />}
    </>
  );
};

ShopList.propTypes = {
  setIsDropDawnOpen: PropTypes.func.isRequired,
};

export default ShopList;
