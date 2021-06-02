import styled from 'styled-components/macro';

export type BgrColorTYPE = 'primary' | 'secondary' | 'navbar';

type ContainerTYPE = {
    bgrColor: BgrColorTYPE;
};

export const Content = styled.div`
    padding: ${({ theme }) => theme.space[2]};
    display: flex;
    & > div {
        flex: 0 0 50%;
        max-width: 50%;
        padding: ${({ theme }) => `0 ${theme.space[1]}`};
        & > img {
            max-width: 100%;
        }
    }
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 96rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        max-width: 101rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints['2k']}) {
        max-width: 128rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-width: 95%;
    }
`;

export const Container = styled.section<ContainerTYPE>`
    background-color: ${({ theme, bgrColor }) => theme.palette.bgr[bgrColor]};
    padding: ${({ theme }) => `${theme.space[4]} 0`};
`;
