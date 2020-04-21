import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { Flex } from '../styles/Flex';
import IconButton from '../styles/IconButton';
import { MeBody2, MeH4 } from '../styles/Typography';
import Tooltip from '../tooltip/Tooltip';
import { ProfilePic } from './profileComponents';

function ProfileHeader({ firstname, lastname, bio, profilePic }) {
	return (
		<Flex justify="center" align="center" margin={{ top: 20 }} direction="column">
			<ProfilePic background="https://placekitten.com/120/120" />
			<MeH4 margin={{ top: '16px', bottom: '8px' }} lineHeight="1rem">
				{firstname} {lastname}
			</MeH4>
			<MeBody2 textAlign="center" lineHeight="1rem" maxWidth="600">
				On a path to solve one of the major global issues. Obsessed with all things related
				to creativity. Full-Stack Developer and a Designer.
			</MeBody2>
			<Flex width="200px" gapBetween="5">
				<Tooltip title="Facebook" placement="bottom">
					<IconButton>
						<Facebook size="16px" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Twitter" placement="bottom">
					<IconButton>
						<Twitter size="16px" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Instagram" placement="bottom">
					<IconButton>
						<Instagram size="16px" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Linkedin" placement="bottom">
					<IconButton>
						<Linkedin size="16px" />
					</IconButton>
				</Tooltip>
			</Flex>
		</Flex>
	);
}

export default ProfileHeader;
