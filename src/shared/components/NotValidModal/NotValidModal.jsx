import PropTypes from 'prop-types';

import { ErrorList } from './NotValidModal.styled';

const NotValidModal = ({ errors }) => {
  const errorEntries = Object.entries(errors);
  console.log({ errors });

  return (
    <ErrorList>
      {errorEntries.map(([name, value]) => {
        return (
          !!value && (
            <li key={name}>
              <p>* {value}</p>
            </li>
          )
        );
      })}
    </ErrorList>
  );
};

NotValidModal.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
};

export default NotValidModal;
