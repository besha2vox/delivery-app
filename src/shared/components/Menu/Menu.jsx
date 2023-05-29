import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MenuList from '../MenuList/MenuList';
import { MenuWrapper } from './Menu.styled';

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuList />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </MenuWrapper>
    );
};

export default Menu;
