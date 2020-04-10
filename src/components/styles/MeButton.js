import styled, { css } from 'styled-components/macro';
import { Button } from 'reakit';
import theme from 'styled-theming';
import PropTypes from 'prop-types';
import {
	COLOR_DARK,
	COLOR_LIGHT,
	COLOR_PRIMARY,
	COLOR_SUCCESS,
	COLOR_WARNING,
	COLOR_DANGER,
	COLOR_PRIMARY_DARK,
	COLOR_PRIMARY_DARKER,
	COLOR_SUCCESS_DARK,
	COLOR_SUCCESS_DARKER,
	COLOR_WARNING_DARK,
	COLOR_DANGER_DARK,
	COLOR_DANGER_DARKER,
	COLOR_WARNING_DARKER,
} from './ThemeConstants';

const buttonColors = theme.variants('mode', 'kind', {
	default: {
		light: css`
			color: ${COLOR_DARK};
			background: transparent;

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: rgba(0, 0, 0, 0.05);
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: rgba(0, 0, 0, 0.1);
				}
			}
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: transparent;

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: rgba(255, 255, 255, 0.05);
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: rgba(255, 255, 255, 0.1);
				}
			}
		`,
	},
	primary: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_PRIMARY};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_PRIMARY_DARK};
					border-color: ${COLOR_PRIMARY_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_PRIMARY_DARKER};
					border-color: ${COLOR_PRIMARY_DARKER};
				}
			}
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_PRIMARY};
			border-color: ${COLOR_PRIMARY};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_PRIMARY_DARK};
					border-color: ${COLOR_PRIMARY_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_PRIMARY_DARKER};
					border-color: ${COLOR_PRIMARY_DARKER};
				}
			}
		`,
	},
	success: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_SUCCESS};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_SUCCESS_DARK};
					border-color: ${COLOR_SUCCESS_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_SUCCESS_DARKER};
					border-color: ${COLOR_SUCCESS_DARKER};
				}
			}
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_SUCCESS};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_SUCCESS_DARK};
					border-color: ${COLOR_SUCCESS_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_SUCCESS_DARKER};
					border-color: ${COLOR_SUCCESS_DARKER};
				}
			}
		`,
	},
	warning: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_WARNING};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_WARNING_DARK};
					border-color: ${COLOR_WARNING_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_WARNING_DARKER};
					border-color: ${COLOR_WARNING_DARKER};
				}
			}
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_WARNING};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_WARNING_DARK};
					border-color: ${COLOR_WARNING_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_WARNING_DARKER};
					border-color: ${COLOR_WARNING_DARKER};
				}
			}
		`,
	},
	danger: {
		light: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_DANGER};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_DANGER_DARK};
					border-color: ${COLOR_DANGER_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_DANGER_DARKER};
					border-color: ${COLOR_DANGER_DARKER};
				}
			}
		`,
		dark: css`
			color: ${COLOR_LIGHT};
			background: ${COLOR_DANGER};

			&:not([aria-disabled='true']) {
				&:hover {
					background-color: ${COLOR_DANGER_DARK};
					border-color: ${COLOR_DANGER_DARK};
				}
				&:active,
				&[aria-expanded='true'] {
					background-color: ${COLOR_DANGER_DARKER};
					border-color: ${COLOR_DANGER_DARKER};
				}
			}
		`,
	},
});

export const MeButton = styled(Button)`
	${buttonColors}
	transition: box-shadow 0.15s ease-in-out;
	outline: 0;
	padding: 10px 16px;
	border: transparent;
	cursor: pointer;
	border-radius: 0.25rem;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 1.25px;
	text-transform: uppercase;
	width: ${props => props.width || 'auto'};

	&[aria-disabled='true'] {
		cursor: auto;
		opacity: 0.5;
	}

	&:focus,
	[aria-activedescendant] &[aria-selected='true'] {
		box-shadow: 0 0 0 0.2em rgba(0, 109, 255, 0.4);
		position: relative;
		z-index: 2;
	}

	svg {
		margin-right: 8px;
		vertical-align: middle;
	}
`;

Button.propTypes = {
	kind: PropTypes.oneOf([
		'default',
		'primary',
		'success',
		'warning',
		'danger',
	]),
	width: PropTypes.string,
};

MeButton.defaultProps = {
	kind: 'default',
};
