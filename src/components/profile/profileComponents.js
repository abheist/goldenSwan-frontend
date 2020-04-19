import styled from 'styled-components/macro';

export const ProfilePic = styled.div`
	height: 120px;
	width: 120px;
	border-radius: 100%;
	${(props) => props.background && `background: url('${props.background}');`}
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const ProfileBio = styled.div``;
