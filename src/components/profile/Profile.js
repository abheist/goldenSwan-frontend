import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Spacer from '../styles/Spacer';
import BlogList from './blogList';
import ProfileHeader from './profileHeader';
import { QL_QUERY_PROFILE } from '../../graphql/users';

function Profile() {
	const { username } = useParams();
	const { loading, error, data } = useQuery(QL_QUERY_PROFILE, {
		variables: { username },
	});

	if (error) return <div>Failed to load!</div>;
	if (loading) return <div>Loading...</div>;

	return (
		<>
			<ProfileHeader
				username={data?.user?.username}
				firstname={data?.user?.firstName}
				lastname={data?.user?.lastName}
				profilePic={data?.user?.profilePic}
			/>
			<Spacer height="60px" />
			<BlogList blogs={data?.user?.articleSet} />
			<Spacer height="150px" />
		</>
	);
}

export default Profile;
