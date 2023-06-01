import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ text, hendleClicker, type }) => {
  if (!type) {
    return (
      <Btn type="button" onClick={hendleClicker}>
        {text}
      </Btn>
    );
  }

  return <Btn type={type}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  hendleClicker: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Button;
