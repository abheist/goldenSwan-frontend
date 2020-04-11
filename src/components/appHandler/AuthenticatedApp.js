import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import { Flex, FlexItem } from '../styles/Flex';
import WriteUp from '../editor/WriteUp';

function AuthenticatedApp() {
	return (
		<Flex flex="1" justify="center">
			<Flex flex="1" direction="column" maxWidth="1200">
				<Header />

				<Flex justify="center">
					<FlexItem width="600px">
						<Switch>
							<Route path="/profile">
								<Profile />
							</Route>
							<Route path="/write">
								<WriteUp />
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
