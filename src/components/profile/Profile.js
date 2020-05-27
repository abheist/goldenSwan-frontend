import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Spacer from '../styles/Spacer';
import BlogList from './blogList';
import ProfileHeader from './profileHeader';
import { QL_QUERY_PROFILE } from '../../graphql/users';

function Profile() {
	const { username } = useParams();
	const [published, setPublished] = useState([]);
	const { loading, error, data } = useQuery(QL_QUERY_PROFILE, {
		variables: { username },
	});

	useEffect(() => {
		const localPublished = [];
		const localUnPublished = [];
		if (data?.user?.articles) {
			for (const i of data?.user?.articles) {
				if (i.published) {
					localPublished.push(i);
				} else {
					localUnPublished.push(i);
				}
			}
			setPublished(localPublished);
		}
	}, [data]);

	if (error) return <div>Failed to load!</div>;
	if (loading) return <div>Loading...</div>;

	return (
		<>
			<ProfileHeader
				username={data?.user?.username}
				firstname={data?.user?.firstName}
				lastname={data?.user?.lastName}
				profilePic={data?.user?.profilePic}
				bio={data?.user?.bio}
				facebook={data?.user?.facebook}
				twitter={data?.user?.twitter}
				instagram={data?.user?.instagram}
				linkedin={data?.user?.linkedin}
			/>
			<Spacer height="60px" />
			{published.length ? <BlogList blogs={published} /> : <div>something...</div>}
			<Spacer height="150px" />
		</>
	);
}

export default Profile;
