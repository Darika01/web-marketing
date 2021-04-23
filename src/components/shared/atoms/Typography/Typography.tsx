import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/macro';

type TypographyVariantTYPE = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';

const setTypographyStyle = (theme: DefaultTheme, variant: TypographyVariantTYPE) => {
    return `
        font-weight: ${theme.typography[variant].fontWeight};
        font-size: ${theme.typography[variant].fontSize};
        line-height: ${theme.typography[variant].lineHeight};
        letter-spacing: ${theme.typography[variant].letterSpacing};
    `;
};

export const TitleH1 = styled.h1`
    ${({ theme }) => setTypographyStyle(theme, 'h1')}
    color: ${({ theme }) => theme.palette.common.white};
`;
export const TitleH2 = styled.h2`
    ${({ theme }) => setTypographyStyle(theme, 'h2')}
    color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
`;
export const TitleH3 = styled.h3`
    ${({ theme }) => setTypographyStyle(theme, 'h3')}
    color: ${({ theme }) => theme.palette.text.primary};
`;
export const TitleH4 = styled.h4`
    ${({ theme }) => setTypographyStyle(theme, 'h4')}
    color: ${({ theme }) => theme.palette.text.primary};
`;
export const Body1 = styled.p`
    ${({ theme }) => setTypographyStyle(theme, 'body1')}
    color: ${({ theme }) => theme.palette.text.primary};
`;
export const Body2 = styled.p`
    ${({ theme }) => setTypographyStyle(theme, 'body2')}
    color: ${({ theme }) => theme.palette.text.primary};
`;
export const Caption = styled.p`
    ${({ theme }) => setTypographyStyle(theme, 'caption')}
    color: ${({ theme }) => theme.palette.text.primary};
`;
