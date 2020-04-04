import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import theme from 'styled-theming';
import {
	COLOR_LIGHT,
	COLOR_DARK,
	FONT_SAN_SERIF,
	FONT_MONO_SPACED,
	COLOR_PRIMARY_DARK,
	COLOR_PRIMARY,
	COLOR_PRIMARY_DARKER
} from './ThemeConstants';

export const backgroundColor = theme('mode', {
	light: COLOR_LIGHT,
	dark: COLOR_DARK
});

const textColor = theme('mode', { light: COLOR_DARK, dark: COLOR_LIGHT });
const fontFamily = theme('font', {
	sanSerif: FONT_SAN_SERIF,
	monoSpaced: FONT_MONO_SPACED
});

const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
	}

	body {
		color: ${textColor};
		background-color: ${backgroundColor};
		font-family: ${fontFamily};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
	}

	#root {
		height: 100%;
		display: flex;
	}

	a {
		text-decoration: none;
		letter-spacing: 0px;
		color: ${COLOR_PRIMARY_DARK};

		&:hover {
			color: ${COLOR_PRIMARY_DARKER};
		}

		&:focus, &:active {
			color: ${COLOR_PRIMARY}
		}
	}

	::selection {
		color: rgb(255, 255, 255);
		background-color: rgb(87, 62, 222);
	}

`;

const Theme = props => (
	<ThemeProvider
		theme={{ mode: mode => mode.light, font: font => font.sanSerif }}
	>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
);

export default Theme;
