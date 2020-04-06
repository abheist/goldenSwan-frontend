import styled from 'styled-components/macro';

export const Avatar = styled.div`
			${props => props.background && `background: url(${props.background});`}
			height: ${props => (props.height ? props.height : '40px')};
			width: ${props => (props.width ? props.width : '40px')};
			border-radius: 100%;
			cursor: pointer;
		`;
