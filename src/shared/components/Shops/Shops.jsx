import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ShopList from '../ShopList/ShopList';
import Title from '../Title/Title';
import { ShoptWrapper, ShopAside, ShopSection } from './Shops.styled';

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
