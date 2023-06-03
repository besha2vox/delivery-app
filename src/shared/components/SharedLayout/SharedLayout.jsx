import { useState } from 'react';

import PageContext from 'shared/contexts/PageContext';
import Header from '../Header';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  const [page, setPage] = useState(1);

  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <PageContext.Provider value={{ page, setPage }}>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </PageContext.Provider>
      </Main>
    </LayoutWrapper>
  );
};

export default SharedLayout;
