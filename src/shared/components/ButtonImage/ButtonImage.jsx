import PropTypes from 'prop-types';

import { ImageNavLink } from './ButtonImage.styled';

const ButtonImage = ({ path, logo, name }) => {
    return (
        <ImageNavLink to={path}>
            <img src={logo} alt={name} />
            <h3>{name}</h3>
        </ImageNavLink>
    );
};

ButtonImage.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default ButtonImage;
