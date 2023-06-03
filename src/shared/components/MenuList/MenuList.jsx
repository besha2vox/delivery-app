import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { selectCurrentShop } from '../../../redux/shops/selectors';
import { getShopById } from '../../../redux/shops/operations';

import PageContext from 'shared/contexts/PageContext';
import ButtonImage from '../ButtonImage/ButtonImage';
import { CategoryList } from './MenuList.styled';

const MenuList = () => {
  const { setPage } = useContext(PageContext);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { shopId } = useParams();
  const shop = useSelector(selectCurrentShop);
  const dispatch = useDispatch();
  const isNameShow = viewportWidth >= 768;

  useEffect(() => {
    dispatch(getShopById(shopId));
  }, [dispatch, shopId]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!!shop && (
        <CategoryList>
          {shop.categories.map(({ _id, name, image }, indx) => (
            <li key={_id}>
              <ButtonImage
                handleClicler={() => setPage(1)}
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
