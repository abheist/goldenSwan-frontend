import React from 'react';
import LoginSignupPage from '../loginPage/LoginSignupPage';
import { Switch, Route } from 'react-router-dom';
import EmailVerificationForm from '../forms/EmailVerificationForm';
import PasswordResetForm from '../forms/PasswordResetForm';

function UnauthenticatedApp(props) {
	return (
		<Switch>
			<Route path="/password-reset/:token">
				<PasswordResetForm />
			</Route>
			<Route path="/activate/:token">
				<EmailVerificationForm />
			</Route>
			<Route path="/">
				<LoginSignupPage {...props} />
			</Route>
		</Switch>
	);
}

export default UnauthenticatedApp;
