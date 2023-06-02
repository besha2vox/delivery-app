import { createPortal } from 'react-dom';
import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const modalContainer = document.getElementById('modal-root');

const Loader = () => {
  return createPortal(
    <LoaderWrapper>
      <Oval
        height={80}
        width={80}
        color="#f09440"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f0944040"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>,
    modalContainer
  );
};

export default Loader;
