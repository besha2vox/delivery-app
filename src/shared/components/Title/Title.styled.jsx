import styled from 'styled-components';

export const TitleStyled = styled.h1`
    font-size: 20px;
    margin-bottom: 12px;
    text-align: center;

    @media screen and (max-width: 767px) {
        margin: 0 auto 12px;
        width: fit-content;
        border-bottom: 1px solid #2e2e2e;
    }
`;
