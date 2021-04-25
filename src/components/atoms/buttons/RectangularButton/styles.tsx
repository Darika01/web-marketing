import styled, { css } from 'styled-components/macro';
import setIconSize from 'utils/themeConfig/setIconSize';

import Loader from '../../Loader/Loader';

type StyledButtonTYPE = {
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    fullWidth?: boolean;
    disabled?: boolean;
};

type BtnIconTYPE = {
    isStartIcon?: boolean;
};

export const StyledButton = styled.button<StyledButtonTYPE>`
    ${({ disabled }) =>
        disabled
            ? css`
                  color: ${({ theme }) => theme.palette.text.disabled};
                  background: ${({ theme }) => theme.palette.bgr.disabled};
                  pointer-events: none;
              `
            : css`
                  color: ${({ theme }) => theme.palette.common.white};
                  background: ${({ theme, color }: any) => theme.palette[color].main};
                  &:hover {
                      background-color: ${({ theme, color }: any) => theme.palette[color].dark};
                  }
                  &:active {
                      background-color: ${({ theme, color }: any) => theme.palette[color].light};
                  }
              `};
    padding: 1.6rem 1.6rem;
    border-radius: ${({ theme }) => theme.border.radius};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'unset')};
    cursor: pointer;
    min-width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const BtnIcon = styled.div<BtnIconTYPE>`
    margin-right: ${({ isStartIcon }: any) => (isStartIcon ? '0.8rem' : 0)};
    margin-left: ${({ isStartIcon }: any) => (!isStartIcon ? '0.8rem' : 0)};
    & > svg {
        ${setIconSize(2)};
    }
`;
export const BtnLoader = styled(Loader)`
    top: 1rem;
    border-color: ${({ theme, color }: any) => theme.palette[color].main};
    border-left-color: white;
`;
