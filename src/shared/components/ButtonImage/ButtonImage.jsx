import PropTypes from 'prop-types';

import { ImageNavLink } from './ButtonImage.styled';

const ButtonImage = ({
  path,
  logo,
  name,
  handleClicler,
  isNameShow = true,
}) => {
  return (
    <ImageNavLink to={path} onClick={handleClicler}>
      <img src={logo} alt={name} />
      {isNameShow && <h3>{name}</h3>}
    </ImageNavLink>
  );
};

ButtonImage.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleClicler: PropTypes.func,
  isNameShow: PropTypes.bool,
};

export default ButtonImage;
