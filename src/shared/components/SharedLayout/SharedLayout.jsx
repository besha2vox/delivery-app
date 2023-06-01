import Header from '../Header';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </LayoutWrapper>
  );
};

export default SharedLayout;
