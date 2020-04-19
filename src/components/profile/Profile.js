import React from 'react';
import Spacer from '../styles/Spacer';
import BlogList from './blogList';
import ProfileHeader from './profileHeader';

function Profile({ user }) {
	return (
		<>
			<ProfileHeader />
			<Spacer height="60px" />
			<BlogList />
			<Spacer height="150px" />
		</>
	);
}

export default Profile;
