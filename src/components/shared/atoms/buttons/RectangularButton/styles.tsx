import setIconSize from 'locales/utils/themeConfig/setIconSize';
import styled, { DefaultTheme } from 'styled-components/macro';

type StylesProps = {
    theme: DefaultTheme;
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    fullWidth?: boolean;
};

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme, color }: StylesProps) => theme.palette[color].main};
    &:hover {
        background-color: ${({ theme, color }: StylesProps) => theme.palette[color].dark};
    }
    &:active {
        background-color: ${({ theme, color }: StylesProps) => theme.palette[color].light};
    }
    padding: 1.6rem 1.6rem;
    border-radius: ${({ theme }) => theme.border.radius};
    width: ${({ theme, fullWidth }: StylesProps) => (fullWidth ? '100%' : 'unset')};
    cursor: pointer;
    min-width: 12rem;
    & > svg {
        margin-left: 0.8rem;
        ${setIconSize(2)};
    }
`;
