import React from 'react';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import CreateArticle from '../articles/CreateArticle';
import Header from '../header/Header';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import { Flex, FlexItem } from '../styles/Flex';
import EditProfile from '../profile/editProfile/EditProfile';
import ViewArticle from '../articles/ViewArticle';
import UpdateArticle from '../articles/UpdateArticle';

function AuthenticatedApp() {
	return (
		<Flex flex="1" justify="center">
			<div
				css={`
					max-width: 800px;
				`}
			>
				<Header />
				<Flex justify="center" width="100%">
					<FlexItem>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/write">
								<CreateArticle />
							</Route>
							<Route path="/view/:articleSlug">
								<ViewArticle />
							</Route>
							<Route path="/edit/:articleSlug">
								<UpdateArticle />
							</Route>
							<Route path="/@:username">
								<Profile />
							</Route>
							<Route path="/edit-profile">
								<EditProfile />
							</Route>
						</Switch>
					</FlexItem>
				</Flex>
			</div>
		</Flex>
	);
}

export default AuthenticatedApp;
