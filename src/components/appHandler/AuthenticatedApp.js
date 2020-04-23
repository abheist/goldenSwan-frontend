import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateArticle from '../articles/CreateArticle';
import Header from '../header/Header';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import { Flex, FlexItem } from '../styles/Flex';

function AuthenticatedApp() {
	return (
		<Flex flex="1" justify="center">
			<div>
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
							<Route path="/profile">
								<Profile />
							</Route>
						</Switch>
					</FlexItem>
				</Flex>
			</div>
		</Flex>
	);
}

export default AuthenticatedApp;
