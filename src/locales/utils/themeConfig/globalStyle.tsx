import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';
import rootFonts from './rootFonts';
import reset from 'styled-reset';

const setRootFonts = () => {
    return Object.entries(breakpoints).map(([viewPortKey, viewPortValue]: [string, string]): string => {
        const query = `@media (min-width: ${viewPortValue}) {
			font-size: ${rootFonts[viewPortKey]}
		}`;
        return query;
    });
};

const GlobalStyle = createGlobalStyle`
	${reset}

	html {
		height: 100%;
		overflow: inherit;
		font-size: 10px;
		${setRootFonts()};
	}
	body {
		height: 100%;
		background-color: ${({ theme }) => theme.palette.bgr.primary};
		overflow: inherit;
		* {
			font-size: 1.6rem;
			font-family: Roboto, sans-serif;
			outline: none;
		};
		p {
			color: ${({ theme }) => theme.palette.text.primary};
		};
		a {
			color: unset;
			text-decoration: none;
		};
	}
	
`;
export default GlobalStyle;
