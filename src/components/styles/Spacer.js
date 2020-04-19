import styled from 'styled-components/macro';

const Spacer = styled.div`
    ${(props) => props.height && `height: ${props.height};`}
	${(props) => props.width && `width: ${props.width};`}
	${(props) => props.minWidth && `min-width: ${props.minWidth}px;`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	${(props) => props.background && `background: ${props.background};`}
`;

export default Spacer;
