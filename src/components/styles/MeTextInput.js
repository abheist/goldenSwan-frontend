import styled from 'styled-components/macro';
import {
	COLOR_PRIMARY_LIGHT,
	COLOR_BACKGROUND,
	COLOR_LIGHT,
	COLOR_GRAY_MEDIUM,
} from './ThemeConstants';
import { MeCaption } from './Typography';

export const MeTextInput = styled.input`
	display: block;
	padding: 10px 16px;
	border: 1px solid transparent;
	border-radius: 8px;
	font-size: 14px;
	line-height: 24px;
	box-sizing: border-box;
	background: ${COLOR_BACKGROUND};
	font-weight: 400;
	height: 40px;
	letter-spacing: normal;
	outline-style: none;
	transition-property: background-color, outline, color, box-shadow, -webkit-box-shadow;
	transition-delay: 0s;
	transition-duration: 0.2s;
	transition-timing-function: ease;

	${(props) => `width: ${props.width || '100%'};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top}px;`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right}px;`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom}px;`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left}px;`}

	${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top}px;`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right}px;`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom}px;`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left}px;`}

	${(props) => props.height && `height: ${props.height};`}
	${(props) => props.fontSize && `font-size: ${props.fontSize};`}


	&:hover {
		background-color: ${COLOR_LIGHT};
		border-color: rgba(0, 0, 0, 0.1);
		box-shadow: 0 0 0 4px ${COLOR_PRIMARY_LIGHT};
	}

	&:focus {
		background-color: ${COLOR_LIGHT};
		border-color: ${COLOR_PRIMARY_LIGHT};
		box-shadow: 0 0 0 4px ${COLOR_PRIMARY_LIGHT};
	}

	&::placeholder {
		color: ${COLOR_GRAY_MEDIUM};
	}
`;

export const MeErrorMessage = styled(MeCaption)`
	color: red;
	margin: 4px 0 0 0;
`;
