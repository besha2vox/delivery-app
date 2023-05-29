import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    height: 100%;

    @media screen and (max-width: 767px) {
        max-width: 480px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;
