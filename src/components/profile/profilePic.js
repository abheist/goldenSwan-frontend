import styled from 'styled-components/macro';

const ProfilePic = styled.input`
	height: 120px;
	width: 120px;
	border-radius: 100%;
	${(props) => props.background && `background: url('${props.background}');`}
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
	transition: all 0.03s;
	box-sizing: border-box;
	border: 0;

	&:active {
		box-shadow: inset 0 0 0px 5px white;
	}

	& ::-webkit-file-upload-button {
		display: none;
	}
`;

export default ProfilePic;
