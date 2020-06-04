import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Add } from 'styled-icons/material';
import { LogoutCircleR as Logout } from '@styled-icons/remix-line/LogoutCircleR';
import logo from '../../assets/img/logo_dark.png';
import { Flex, FlexItem } from '../styles/Flex';
import Avatar from '../styles/Avatar';
import Tooltip from '../tooltip/Tooltip';
import IconButton from '../styles/IconButton';
import UserContext from '../../contexts/UserContext';
import { logoutUser } from '../../helpers/authService';

function Header() {
	const { dispatch } = useContext(UserContext);
	const logout = () => {
		logoutUser();
		dispatch();
	};

	return (
		<Flex justify="space-between" align="center" width="100%" height="72px">
			<Link to="/">
				<img src={logo} alt="MeUp Logo" height="45px" />
			</Link>
			<Flex justify="space-between" align="center">
				<Link to="/write">
					<Tooltip title="Write">
						<IconButton>
							<Add size="24px" />
						</IconButton>
					</Tooltip>
				</Link>
				<FlexItem margin={{ left: 35, right: 35 }}>
					<UserContext.Consumer>
						{({ username }) => (
							<Link to={`/@${username}`}>
								<Tooltip title="Profile">
									<Avatar background="https://placekitten.com/60/60" />
								</Tooltip>
							</Link>
						)}
					</UserContext.Consumer>
				</FlexItem>
				<Tooltip title="Logout">
					<IconButton type="button" onClick={logout}>
						<Logout size="24px" />
					</IconButton>
				</Tooltip>
			</Flex>
		</Flex>
	);
}

export default Header;
