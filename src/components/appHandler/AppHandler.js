import React from 'react';
import UserContext from '../../contexts/UserContext';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function AppHandler() {
	return (
		<>
			<UserContext.Consumer>
				{({ username }) => (username ? <AuthenticatedApp /> : <UnauthenticatedApp />)}
			</UserContext.Consumer>
		</>
	);
}

export default AppHandler;
