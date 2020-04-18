import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { QL_MUTATION_AUTH_REFRESH_TOKEN } from '../../graphql/mutations/authentication';
import {
	getLocalExpTime,
	getLocalRefreshToken,
	getLocalToken,
	setLocalExpTime,
	setLocalRefreshToken,
	setLocalToken,
} from '../../helpers/authService';
import { CONTACT_ADMIN_EMAIL } from '../../helpers/constants';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function AppHandler() {
	const [token, setToken] = useState(getLocalToken() || undefined);
	const [counter, setCounter] = useState(0);
	const [doRefreshToken, { data: refreshTokenData, error }] = useMutation(
		QL_MUTATION_AUTH_REFRESH_TOKEN
	);

	setInterval(() => {
		setCounter(counter + 1);
	}, 240000);

	useEffect(() => {
		if (getLocalExpTime()) {
			doRefreshToken({
				variables: {
					refreshToken: getLocalRefreshToken(),
				},
			});
		}
	}, [doRefreshToken, counter]);

	useEffect(() => {
		if (refreshTokenData?.refreshToken?.success) {
			setLocalToken(refreshTokenData.refreshToken.token);
			setLocalRefreshToken(refreshTokenData.refreshToken.refreshToken);
			setLocalExpTime(refreshTokenData.refreshToken.payload.exp);
		}
	}, [refreshTokenData]);

	if (error) {
		return (
			<div>
				Server error!!! Please contact
				<a href={`mailto:${CONTACT_ADMIN_EMAIL}`}> admin</a>
			</div>
		);
	}
	return <>{token ? <AuthenticatedApp /> : <UnauthenticatedApp setToken={setToken} />}</>;
}

export default AppHandler;
