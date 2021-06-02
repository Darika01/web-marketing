import styled from 'styled-components/macro';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        padding: ${({ theme }) => `0 ${theme.space[2]}`};
    }
`;
