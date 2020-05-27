import React, { useState, useContext, useEffect } from 'react';
// import WriteBox from '../writeBox/writeBox';
import { useQuery } from '@apollo/client';
import { MeH4 } from '../styles/Typography';
import { QL_QUERY_PROFILE } from '../../graphql/users';

import UserContext from '../../contexts/UserContext';
import BlogList from '../profile/blogList';

function Home() {
	const [unPublished, setUnPublished] = useState([]);
	const { username } = useContext(UserContext);
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
			setUnPublished(localUnPublished);
		}
	}, [data]);

	if (error) return <div>Failed to load!</div>;
	if (loading) return <div>Loading...</div>;

	return (
		<>
			{/* <WriteBox /> */}
			<MeH4>Unpublished articles:</MeH4>
			<div>
				{unPublished.length ? <BlogList blogs={unPublished} /> : <div>something...</div>}
			</div>
		</>
	);
}

export default Home;
