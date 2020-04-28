import React, { useState } from 'react';
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

	return <>{token ? <AuthenticatedApp /> : <UnauthenticatedApp setToken={setToken} />}</>;
}

export default AppHandler;
