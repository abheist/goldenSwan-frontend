import React, { useState } from 'react';
import { UserContextProvider } from '../../contexts/UserContext';
import { getLocalToken } from '../../helpers/authService';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

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
				<UserContextProvider>
					<AuthenticatedApp />
				</UserContextProvider>
			) : (
				<UnauthenticatedApp setToken={setToken} />
			)}
		</>
	);
}

export default AppHandler;
