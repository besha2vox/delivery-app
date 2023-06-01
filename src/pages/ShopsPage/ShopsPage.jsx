import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ShopList from '../../shared/components/ShopList/ShopList';
import Title from '../../shared/components/Title/Title';
import { ShoptWrapper, ShopAside, ShopSection } from './ShopsPage.styled';

const Shops = () => {
  return (
    <ShoptWrapper>
      <ShopAside>
        <Title title="Магазини:" />
        <ShopList />
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
