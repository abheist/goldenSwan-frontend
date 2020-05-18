import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { Link } from 'react-router-dom';
import { Flex } from '../styles/Flex';
import IconButton from '../styles/IconButton';
import { MeBody2, MeH4 } from '../styles/Typography';
import Tooltip from '../tooltip/Tooltip';
import MeButton from '../styles/MeButton';
import ImageRender from '../imageRender/ImageRender';

function ProfileHeader({
	firstname,
	lastname,
	bio,
	profilePic,
	facebook,
	twitter,
	instagram,
	linkedin,
}) {
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
					<Link to={`https://facebook.com/${facebook}`}>
						<IconButton>
							<Facebook size="16px" />
						</IconButton>
					</Link>
				</Tooltip>
				<Tooltip title="Twitter" placement="bottom">
					<Link to={`https://twitter.com/${twitter}`}>
						<IconButton>
							<Twitter size="16px" />
						</IconButton>
					</Link>
				</Tooltip>
				<Tooltip title="Instagram" placement="bottom">
					<Link to={`https://instagram.com/${instagram}`}>
						<IconButton>
							<Instagram size="16px" />
						</IconButton>
					</Link>
				</Tooltip>
				<Tooltip title="Linkedin" placement="bottom">
					<Link to={`https://linkedin.com/${linkedin}`}>
						<IconButton>
							<Linkedin size="16px" />
						</IconButton>
					</Link>
				</Tooltip>
				<Link to="edit-profile">
					<MeButton>Edit profile</MeButton>
				</Link>
			</Flex>
		</Flex>
	);
}

export default ProfileHeader;
