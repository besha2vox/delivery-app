import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './shared/components/SharedLayout/';
import RedirectPage from 'pages/RedirectPage/RedirectPage';

const App = () => {
  const Shops = lazy(() => import('./pages/ShopsPage'));
  const CartPage = lazy(() => import('./pages/CartPage'));
  const Menu = lazy(() => import('./shared/components/Menu'));
  const Advertising = lazy(() => import('./shared/components/Advertising'));
  const DishList = lazy(() => import('./shared/components/DishList'));

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RedirectPage />} />
        <Route path="shop" element={<Shops />}>
          <Route index element={<Advertising />} />
          <Route path=":shopId" element={<Menu />}>
            <Route path=":category" element={<DishList />} />
          </Route>
        </Route>
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<RedirectPage />} />
    </Routes>
  );
};

export default App;
