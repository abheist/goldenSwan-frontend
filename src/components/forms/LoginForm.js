import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import UserContext from '../../contexts/UserContext';
import {
	QL_MUTATION_AUTH_TOKEN_VERIFY,
	QL_MUTATION_AUTH_TOKEN_WITH_USERNAME,
} from '../../graphql/mutations/authentication';
import {
	setLocalExpTime,
	setLocalRefreshToken,
	setLocalToken,
	setLocalUsername,
} from '../../helpers/authService';
import { Flex, FlexItem } from '../styles/Flex';
import FormGroup from '../styles/FormGroup';
import MeButton from '../styles/MeButton';
import { MeErrorMessage, MeTextInput } from '../styles/MeTextInput';
import { MeCaption } from '../styles/Typography';

function LoginForm() {
	const [requestLogin, { data: loginData }] = useMutation(QL_MUTATION_AUTH_TOKEN_WITH_USERNAME);
	const [doVerifyToken, { data: verifyTokenData }] = useMutation(QL_MUTATION_AUTH_TOKEN_VERIFY);
	const { dispatch } = useContext(UserContext);

	useEffect(() => {
		if (loginData && loginData?.tokenAuth?.success) {
			setLocalToken(loginData.tokenAuth.token);
			setLocalRefreshToken(loginData.tokenAuth.refreshToken);
			doVerifyToken({
				variables: {
					token: loginData.tokenAuth.token,
				},
			});
		}
	}, [loginData, doVerifyToken]);

	useEffect(() => {
		if (verifyTokenData?.verifyToken?.success) {
			setLocalExpTime(verifyTokenData.verifyToken.payload.exp);
			setLocalUsername(verifyTokenData.verifyToken.payload.username);
			dispatch(verifyTokenData.verifyToken.payload.username);
		}
	}, [verifyTokenData, dispatch]);

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

export default LoginForm;
