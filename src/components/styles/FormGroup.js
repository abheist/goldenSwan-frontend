import styled from 'styled-components/macro';
import { MeTextInput } from './MeTextInput';
import { COLOR_GRAY } from './ThemeConstants';

const FormGroup = styled.div`
	height: 96px;

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top}px;`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right}px;`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom}px;`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left}px;`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.flex && `display: flex;`}

	label {
		display: block;
		font-style: normal;
		font-weight: bold;
		font-size: 15px;
		line-height: 18px;
		letter-spacing: 0.25px;
		margin: 14px 0 4px;
	}
	
	${(props) =>
		props.appearance &&
		props.appearance === 'outline' &&
		`
		${MeTextInput} {
			border: 1px solid ${COLOR_GRAY};
		}
	`}

`;

export default FormGroup;
