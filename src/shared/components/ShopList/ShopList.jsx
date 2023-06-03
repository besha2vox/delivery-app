import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getShops } from '../../../redux/shops/operations';
import {
  selectAllShops,
  selectShopIsLoading,
} from '../../../redux/shops/selectors';
import { selectCurrentShop } from 'redux/cart/selectors';

import PageContext from 'shared/contexts/PageContext';
import Loader from '../Loader/Loader';
import ButtonImage from '../ButtonImage/ButtonImage';
import { ShopsList, ShopItem } from './ShopList.styled';

const ShopList = ({ setIsDropDawnOpen }) => {
  const { setPage } = useContext(PageContext);
  const shops = useSelector(selectAllShops);
  const currentShop = useSelector(selectCurrentShop);
  const isLoading = useSelector(selectShopIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  const handleClick = () => {
    setIsDropDawnOpen(false);
    setPage(1);
  };

  return (
    <>
      {!!shops && (
        <ShopsList>
          {shops.map(({ name, logo, _id, categories }) => (
            <ShopItem key={_id}>
              <ButtonImage
                handleClicler={handleClick}
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
