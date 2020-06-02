import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import MeButton from '../styles/MeButton';
import { MeTextInput, MeErrorMessage } from '../styles/MeTextInput';
import {
	QL_MUTATION_AUTH_TOKEN_WITH_USERNAME,
	QL_MUTATION_AUTH_TOKEN_VERIFY,
} from '../../graphql/mutations/authentication';
import { Flex, FlexItem } from '../styles/Flex';
import {
	setLocalToken,
	setLocalRefreshToken,
	setLocalExpTime,
	getLocalToken,
	setLocalUsername,
} from '../../helpers/authService';
import { MeCaption } from '../styles/Typography';
import FormGroup from '../styles/FormGroup';

function LoginForm({ setToken }) {
	const [requestLogin, { data: loginData }] = useMutation(QL_MUTATION_AUTH_TOKEN_WITH_USERNAME);

	const [doVerifyToken, { data: verifyTokenData }] = useMutation(QL_MUTATION_AUTH_TOKEN_VERIFY);

	useEffect(() => {
		if (!loginData) {
			toast('Please use correct Username and Password!!!');
		}
		if (loginData && loginData?.tokenAuth?.success) {
			setLocalToken(loginData.tokenAuth.token);
			setLocalRefreshToken(loginData.tokenAuth.refreshToken);
			doVerifyToken({
				variables: {
					token: loginData.tokenAuth.token,
				},
			});
		}
	}, [loginData, doVerifyToken, setToken]);

	useEffect(() => {
		if (verifyTokenData?.verifyToken?.success) {
			setLocalExpTime(verifyTokenData.verifyToken.payload.exp);
			setToken(getLocalToken());
			setLocalUsername(verifyTokenData.verifyToken.payload.username);
		}
	}, [verifyTokenData, setToken]);

	return (
		<>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				validationSchema={Yup.object({
					username: Yup.string().required('Required!'),
					password: Yup.string().required('Required!'),
				})}
				onSubmit={(values) => {
					requestLogin({
						variables: {
							email: values.username,
							password: values.password,
						},
					});
				}}
			>
				<Form>
					<Flex justify="space-between">
						<FormGroup margin={{ right: 10 }}>
							<label htmlFor="username">Username</label>
							<Field
								as={MeTextInput}
								name="username"
								type="text"
								autoComplete="username"
								width="200px"
							/>
							<ErrorMessage component={MeErrorMessage} name="username" />
						</FormGroup>

						<FormGroup margin={{ right: 10 }}>
							<Flex as="label" htmlFor="password" justify="space-between">
								<span>Password</span>
								<FlexItem margin={{ right: 8 }}>
									<MeCaption as="span">
										<Link to="/forgot-password/" tabIndex="-1">
											Forgot password?
										</Link>
									</MeCaption>
								</FlexItem>
							</Flex>
							<Field
								as={MeTextInput}
								name="password"
								type="password"
								autoComplete="current-password"
								width="200px"
							/>
							<ErrorMessage component={MeErrorMessage} name="password" />
						</FormGroup>
						<FlexItem margin={{ top: 36 }}>
							<MeButton type="submit" kind="primary">
								Login
							</MeButton>
						</FlexItem>
					</Flex>
				</Form>
			</Formik>
		</>
	);
}

LoginForm.propTypes = {
	setToken: PropTypes.func,
};

export default LoginForm;
