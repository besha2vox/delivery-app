import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ text, hendleClicker }) => {
    return <Btn onClick={hendleClicker}>{text}</Btn>;
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    hendleClicker: PropTypes.func.isRequired,
};

export default Button;
