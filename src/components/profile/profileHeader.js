import React, { useContext } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { Link } from 'react-router-dom';
import { Flex } from '../styles/Flex';
import IconButton from '../styles/IconButton';
import { MeBody2, MeH4 } from '../styles/Typography';
import Tooltip from '../tooltip/Tooltip';
import MeButton from '../styles/MeButton';
import ImageRender from '../imageRender/ImageRender';
import UserContext from '../../contexts/UserContext';

function ProfileHeader({
	username,
	firstname,
	lastname,
	bio,
	profilePic,
	facebook,
	twitter,
	instagram,
	linkedin,
}) {
	const { username: loggedInUsername } = useContext(UserContext);
	return (
		<Flex justify="center" align="center" margin={{ top: 20 }} direction="column">
			<ImageRender
				publicId={profilePic || null}
				transformations={{
					width: 120,
					height: 120,
					crop: 'fill',
					radius: 'max',
					format: 'png',
				}}
			/>
			<MeH4 margin={{ top: '42px', bottom: '8px' }} lineHeight="1rem">
				{firstname} {lastname}
			</MeH4>
			<MeBody2 textAlign="center" lineHeight="1rem" maxWidth="600">
				{bio}
			</MeBody2>
			<Flex gapBetween="5" align="center" justify="center">
				<Tooltip title="Facebook" placement="bottom">
					<a
						href={`https://facebook.com/${facebook}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconButton>
							<Facebook size="16px" />
						</IconButton>
					</a>
				</Tooltip>
				<Tooltip title="Twitter" placement="bottom">
					<a
						href={`https://twitter.com/${twitter}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconButton>
							<Twitter size="16px" />
						</IconButton>
					</a>
				</Tooltip>
				<Tooltip title="Instagram" placement="bottom">
					<a
						href={`https://instagram.com/${instagram}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconButton>
							<Instagram size="16px" />
						</IconButton>
					</a>
				</Tooltip>
				<Tooltip title="Linkedin" placement="bottom">
					<a
						href={`https://linkedin.com/${linkedin}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconButton>
							<Linkedin size="16px" />
						</IconButton>
					</a>
				</Tooltip>
				{loggedInUsername === username && (
					<Link to="edit-profile">
						<MeButton>Edit profile</MeButton>
					</Link>
				)}
			</Flex>
		</Flex>
	);
}

export default ProfileHeader;
