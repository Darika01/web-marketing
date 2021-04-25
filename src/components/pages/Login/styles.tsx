import LoginBgr from 'assets/images/login-bgr.jpg';
import { Body1, TitleH1, TitleH4 } from 'components/atoms/Typography/Typography';
import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    background-image: url(${LoginBgr});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    width: 100%;
    height: 100%;
    margin-bottom: ${({ theme }) => theme.space[6]};
    border-radius: 0 0 4rem 4rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
        border-radius: 0 8rem 8rem 0;
    }
    position: relative;
`;
export const BlurredContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    border: 0.3rem solid ${({ theme }) => theme.palette.common.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 70%;
    border-radius: ${({ theme }) => theme.border.radius};
    padding: ${({ theme }) => `${theme.space[3]} ${theme.space[2]}`};
`;

export const DataContainer = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.space[2]};
    }
    align-items: baseline;
`;
export const DataLabel = styled(Body1)`
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.space[2]};
    text-align: right;
    flex-basis: 50%;
`;
export const DataValue = styled(TitleH4)`
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: bold;
`;
export const RightSide = styled.div`
    flex: 1;
    width: 100%;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin: 0 auto;
        max-width: 48rem;
        padding: 0 ${({ theme }) => theme.space[2]};
    }
`;

export const FormTitle = styled(TitleH1)`
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 4.8rem;
`;
