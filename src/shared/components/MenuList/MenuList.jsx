import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  selectCurrentShop,
  selectShopIsLoading,
} from '../../../redux/shops/selectors';
import { getShopById } from '../../../redux/shops/operations';

import ButtonImage from '../ButtonImage/ButtonImage';
import { CategoryList } from './MenuList.styled';

const MenuList = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [path, setPath] = useState('');
  const { shopId, category } = useParams();
  const shop = useSelector(selectCurrentShop);
  const isLoading = useSelector(selectShopIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNameShow = viewportWidth >= 768;

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!category && !isLoading) {
      setPath(shop?.categories[0].name);
      navigate(path);
    }
  }, [category, isLoading, navigate, path, shop?.categories]);

  useEffect(() => {
    dispatch(getShopById(shopId));
  }, [dispatch, shopId]);

  return (
    <>
      {!!shop && (
        <CategoryList>
          {shop.categories.map(({ _id, name, image }, indx) => (
            <li key={_id}>
              <ButtonImage
                isFirstRender={indx === 0 && !category ? true : false}
                isNameShow={isNameShow}
                path={name}
                name={name}
                logo={image}
              />
            </li>
          ))}
        </CategoryList>
      )}
    </>
  );
};

export default MenuList;
