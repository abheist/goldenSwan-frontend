import React, { useState } from 'react';
import { getLocalToken } from '../../helpers/authService';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function AppHandler() {
	const [token, setToken] = useState(getLocalToken() || undefined);

	return <>{token ? <AuthenticatedApp /> : <UnauthenticatedApp setToken={setToken} />}</>;
}

export default AppHandler;
