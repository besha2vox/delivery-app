import PropTypes from 'prop-types';

import { ImageNavLink } from './ButtonImage.styled';

const ButtonImage = ({
  path,
  logo,
  name,
  handleClicler,
  isNameShow = true,
  isDisabled = false,
}) => {
  const handleClick = event => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    handleClicler();
  };

  return (
    <ImageNavLink to={path} onClick={handleClick} disabled={isDisabled}>
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
  isDisabled: PropTypes.bool,
};

export default ButtonImage;
