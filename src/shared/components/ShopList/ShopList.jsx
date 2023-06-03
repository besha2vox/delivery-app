import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getShops } from '../../../redux/shops/operations';
import {
  selectAllShops,
  selectShopIsLoading,
} from '../../../redux/shops/selectors';

import Loader from '../Loader/Loader';
import ButtonImage from '../ButtonImage/ButtonImage';
import { ShopsList, ShopItem } from './ShopList.styled';

const ShopList = ({ setIsDropDawnOpen }) => {
  const shops = useSelector(selectAllShops);
  const isLoading = useSelector(selectShopIsLoading);
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
              <ButtonImage
                handleClicler={() => setIsDropDawnOpen(false)}
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
