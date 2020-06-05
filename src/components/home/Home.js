import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowNarrowRight } from '@styled-icons/heroicons-solid/ArrowNarrowRight';
import UserContext from '../../contexts/UserContext';
import { QL_QUERY_PROFILE } from '../../graphql/users';
import BlogList from '../profile/blogList';
import { MeH4 } from '../styles/Typography';
import UnboxingDoodle from '../../assets/img/svg/UnboxingDoodle.svg';
import { Flex } from '../styles/Flex';
import MeButton from '../styles/MeButton';

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
			{!unPublished.length ? (
				<Flex direction="column" justify="center" align="center" margin={{ top: 140 }}>
					<img
						src={UnboxingDoodle}
						alt="MeUp vector showing a persons"
						css={`
							width: 32%;
							max-width: 500px;
							position: absolute;
							left: 10%;
							bottom: 0;
						`}
					/>
					<Link to="write">
						<MeButton kind="primary">
							Let it out <ArrowNarrowRight size="24" />
						</MeButton>
					</Link>
					<h2>Get ready and let it out.</h2>
					<p>“The first draft is just you telling yourself the story.”</p>
					<p>― Terry Pratchett</p>
				</Flex>
			) : (
				<>
					<MeH4>Unpublished articles:</MeH4>
					<div>
						{unPublished.length ? (
							<BlogList blogs={unPublished} />
						) : (
							<div>something...</div>
						)}
					</div>
				</>
			)}
		</>
	);
}

export default Home;
