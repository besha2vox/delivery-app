import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './shared/components/SharedLayout/';

const App = () => {
    const Shops = lazy(() => import('./shared/components/Shops'));
    const Menu = lazy(() => import('./shared/components/Menu'));
    const Advertising = lazy(() => import('./shared/components/Advertising'));
    const DishList = lazy(() => import('./shared/components/DishList'));

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="shop" element={<Shops />}>
                    <Route index element={<Advertising />} />
                    <Route path=":shopId" element={<Menu />}>
                        <Route path=":category" element={<DishList />} />
                    </Route>
                </Route>
                <Route path="cart" />
            </Route>
        </Routes>
    );
};

export default App;
