import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { Flex } from '../styles/Flex';
import IconButton from '../styles/IconButton';
import { MeBody2, MeH4 } from '../styles/Typography';
import Tooltip from '../tooltip/Tooltip';
import { ProfilePic } from './profileComponents';

function ProfileHeader() {
	return (
		<Flex justify="center" align="center" margin={{ top: 20 }} direction="column">
			<ProfilePic background="https://placekitten.com/120/120" />
			<MeH4 margin={{ top: '16px', bottom: '8px' }} lineHeight="1rem">
				Nina Dobrev
			</MeH4>
			<MeBody2 textAlign="center" lineHeight="1rem" maxWidth="600">
				Nikolina Kamenova Dobreva, known professionally as Nina Dobrev, is a Canadian
				actress. Her first acting role was as Mia Jones in the drama series Degrassi: The
				Next Generation. She later became known for portraying Elena Gilbert and Katherine
				Pierce on The CW's supernatural drama series The Vampire Diaries.
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
