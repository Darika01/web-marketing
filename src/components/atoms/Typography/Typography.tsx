import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/macro';

type TypographyVariantTYPE = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'inherit';
type ColorTYPE = 'primaryMain';
type variantTYPE = 'h2';
type SpanTYPE = { color?: ColorTYPE; variant?: variantTYPE };

export const setTypographyStyle = (theme: DefaultTheme, variant: TypographyVariantTYPE): string => {
    return `
        font-weight: ${variant !== 'inherit' ? theme.typography[variant].fontWeight : 'inherit'};
        font-size: ${variant !== 'inherit' ? theme.typography[variant].fontSize : 'inherit'};
        line-height: ${variant !== 'inherit' ? theme.typography[variant].lineHeight : 'inherit'};
        letter-spacing: ${variant !== 'inherit' ? theme.typography[variant].letterSpacing : 'inherit'};
    `;
};

export const TitleH1 = styled.h1`
    ${({ theme }) => setTypographyStyle(theme, 'h1')}
    color: ${({ theme }) => theme.palette.common.white};
`;
export const TitleH2 = styled.h2`
    ${({ theme }) => setTypographyStyle(theme, 'h2')}
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
export const TypographySpan = styled.span<SpanTYPE>`
    ${({ theme, variant }) => setTypographyStyle(theme, variant ? variant : 'inherit')}
    color: ${({ theme, color }) => (color ? theme.palette.text[color] : theme.palette.text.primary)};
`;
