import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ShopList from '../../shared/components/ShopList/ShopList';
import Title from '../../shared/components/Title/Title';
import DropDownButton from 'shared/components/DropDownButton/DropDownButton';
import { ShoptWrapper, ShopAside, ShopSection } from './ShopsPage.styled';

const Shops = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isDropDawnOpen, setIsDropDawnOpen] = useState(false);
  const [asideClasses, serAsideClasses] = useState('');
  const { shopId } = useParams();

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
    if (viewportWidth >= 1280) {
      serAsideClasses('');
    }

    if (shopId && viewportWidth < 1280) {
      serAsideClasses('mobile-hidden');

      if (isDropDawnOpen) {
        serAsideClasses(prevState => prevState.concat(' active'));
      }
    }
  }, [isDropDawnOpen, shopId, viewportWidth]);

  const toggleDropDown = () => {
    setIsDropDawnOpen(prevState => !prevState);
  };

  const closeDropDown = e => {
    if (e.target !== e.currentTarget) return;

    setIsDropDawnOpen(false);
  };

  return (
    <ShoptWrapper>
      <ShopAside className={asideClasses} onClick={closeDropDown}>
        {shopId && viewportWidth < 1280 && (
          <DropDownButton text="Магазини" habdleClicker={toggleDropDown} />
        )}
        <Title title="Магазини:" />
        <ShopList setIsDropDawnOpen={setIsDropDawnOpen} />
      </ShopAside>
      <ShopSection>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ShopSection>
    </ShoptWrapper>
  );
};

export default Shops;
