import React from 'react';
import { Link } from 'react-router-dom';
import { Add } from 'styled-icons/material';
import logo from '../../assets/img/logo_dark.png';
import { Flex, FlexItem } from '../styles/Flex';
import Avatar from '../styles/Avatar';
import Tooltip from '../tooltip/Tooltip';
import IconButton from '../styles/IconButton';

function Header() {
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
				<FlexItem margin={{ left: 35 }}>
					<Link to="/profile">
						<Tooltip title="Profile">
							<Avatar background="https://placekitten.com/60/60" />
						</Tooltip>
					</Link>
				</FlexItem>
			</Flex>
		</Flex>
	);
}

export default Header;
