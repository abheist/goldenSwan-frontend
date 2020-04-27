import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { MeTextInput } from './MeTextInput';
import {
	COLOR_DANGER,
	COLOR_DARK,
	COLOR_LIGHT,
	COLOR_PRIMARY,
	COLOR_SUCCESS,
	COLOR_WARNING,
} from './ThemeConstants';

const buttonColors = theme.variants('mode', 'kind', {
	default: {
		light: css`
			color: ${COLOR_DARK};
			background-color: rgba(0, 0, 0, 0.05);
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: transparent;
		`,
	},
	primary: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_PRIMARY};
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_PRIMARY};
			border-color: ${COLOR_PRIMARY};
		`,
	},
	success: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_SUCCESS};
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_SUCCESS};
		`,
	},
	warning: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_WARNING};
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_WARNING};
		`,
	},
	danger: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_DANGER};
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_DANGER};
		`,
	},
});

const PrefixIcon = styled.div`
	${buttonColors}
	transition: box-shadow 0.15s ease-in-out;
	outline: 0;
	height: 40px;
	width: 40px;
	border: transparent;
	cursor: pointer;
	border-radius: 8px 0 0 8px;
	display: flex;
	justify-content: center;
	align-items: center;

	&[aria-disabled='true'] {
		cursor: auto;
		opacity: 1;
	}

	& > svg {
		height: 24px;
		width: 24px;
	}

	& + ${MeTextInput} {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

PrefixIcon.defaultProps = {
	kind: 'default',
};

export default PrefixIcon;
