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
			<Flex flex="1" direction="column" maxWidth="1200px">
				<Header />
				<Flex justify="center" width="100%">
					<FlexItem minWidth="600px">
						<Switch>
							<Route path="/profile">
								<Profile />
							</Route>
							<Route path="/write">
								<CreateArticle />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</FlexItem>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default AuthenticatedApp;
