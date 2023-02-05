import { createGlobalStyle } from 'styled-components';
import resetCSS from './reset';

const GlobalStyle = createGlobalStyle`
	${resetCSS}

	*,
	*:after,
	*:before {
		box-sizing: border-box;
	}

	html {
		position: relative;
		min-height: 100%;
		font-size: 10px;
		font-weight: 400;
		font-family: sans-serif;
	}

	body {
		overflow-y: scroll;
	}

	/* Hide annoying analytics pixel that causes 10px of whitespace at the bottom of the page */
	body > img {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px; width: 1px;
		margin: -1px; padding: 0; border: 0;
	}
`;

export default GlobalStyle;
