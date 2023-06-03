import PropTypes from 'prop-types';

import { DropButton } from './DropDownButton.styled';

const DropDownButton = ({ text, habdleClicker }) => {
  return <DropButton onClick={habdleClicker}>{text}</DropButton>;
};

DropDownButton.propTypes = {
  text: PropTypes.string.isRequired,
  habdleClicker: PropTypes.func.isRequired,
};

export default DropDownButton;
