import React, { useState } from 'react';
import { getLocalToken, getLocalUsername } from '../../helpers/authService';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import UserContext from '../../contexts/UserContext';

function AppHandler() {
	const [token, setToken] = useState(getLocalToken() || undefined);

	window.addEventListener('storage', () => {
		if (token !== getLocalToken()) {
			setToken(getLocalToken());
		}
	});

	return (
		<>
			{token ? (
				<UserContext.Provider value={getLocalUsername()}>
					<AuthenticatedApp />
				</UserContext.Provider>
			) : (
				<UnauthenticatedApp setToken={setToken} />
			)}
		</>
	);
}

export default AppHandler;
