import styled from 'styled-components/macro';
import { COLOR_PRIMARY_LIGHT, COLOR_BACKGROUND, COLOR_LIGHT } from './ThemeConstants';
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
	margin: 0 8px 0 0;
	outline-style: none;
	transition-property: background-color, outline, color, box-shadow, -webkit-box-shadow;
	transition-delay: 0s;
	transition-duration: 0.2s;
	transition-timing-function: ease;
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth};`}

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
`;

export const MeErrorMessage = styled(MeCaption)`
	color: red;
	margin: 4px 0 0 0;
`;

export const FormGroup = styled.div`
	height: 96px;

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top}px;`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right}px;`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom}px;`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left}px;`}
	${(props) => props.width && `width: ${props.width};`}

	label {
		display: block;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		line-height: 18px;
		letter-spacing: 0.25px;
		margin: 14px 0 4px;
	}

`;
