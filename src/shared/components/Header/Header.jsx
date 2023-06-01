import { useSelector } from 'react-redux';
import { selectOrderedQuantity } from 'redux/cart/selectors';

import Container from '../Container';
import { HeaderList, HeaderNavLink, OrderedQuantity } from './Header.styled';

const Header = () => {
  const orderedQuantity = useSelector(selectOrderedQuantity);
  return (
    <header>
      <Container>
        <HeaderList>
          <li>
            <HeaderNavLink to="/shop">Магазини</HeaderNavLink>
          </li>
          <li>
            <HeaderNavLink to="/cart">
              Кошик
              {!!orderedQuantity && (
                <OrderedQuantity>{orderedQuantity}</OrderedQuantity>
              )}
            </HeaderNavLink>
          </li>
        </HeaderList>
      </Container>
    </header>
  );
};

export default Header;
