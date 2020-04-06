import React from 'react';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import WriteUp from '../writeUp/WriteUp';
import { Link, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import { Flex } from '../styles/Flex';
import styled from 'styled-components/macro';

function AuthenticatedApp() {
	return (
		<Flex flex="1" justify="center">
			<Flex flex="1" direction="column" maxWidth="1200">
				<Header />

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
			</Flex>
		</Flex>
	);
}

export default AuthenticatedApp;
