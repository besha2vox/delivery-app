import Container from '../Container';
import { HeaderList, HeaderNavLink } from './Header.styled';

const Header = () => {
    return (
        <header>
            <Container>
                <HeaderList>
                    <li>
                        <HeaderNavLink to="/shop">Магазини</HeaderNavLink>
                    </li>
                    <li>
                        <HeaderNavLink to="/cart">Кошик</HeaderNavLink>
                    </li>
                </HeaderList>
            </Container>
        </header>
    );
};

export default Header;
