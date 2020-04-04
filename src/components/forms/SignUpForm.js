import { useMutation } from '@apollo/client';
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import { Google } from '@styled-icons/fa-brands/Google';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import gmailLogo from '../../assets/img/gmailLogo.svg';
import yahooLogo from '../../assets/img/outlookLogo.svg';
import outlookLogo from '../../assets/img/yahooMailLogo.svg';
import { QL_MUTATION_REGISTER_NEW_USER } from '../../graphql/mutations/authentication';
import { generateUsername } from '../../helpers/authenticatedUser';
import { Divider } from '../styles/Divider';
import { Flex, FlexItem } from '../styles/Flex';
import { MeButton } from '../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../styles/MeTextInput';
import { COLOR_PRIMARY } from '../styles/ThemeConstants';
import { MeBody2, MeH4, MeH5, MeH6 } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

function SignUpForm() {
	const [doRegisterUser, { data }] = useMutation(
		QL_MUTATION_REGISTER_NEW_USER
	);

	if (data?.register?.success) {
		return (
			<div
				css={`
					width: 400px;
				`}
			>
				<MailSend size="64" color={COLOR_PRIMARY} />
				<MeH4 color={COLOR_PRIMARY}>Thanks for Signing Up!</MeH4>
				<MeH6>We've sent you an email with verification link.</MeH6>
				<MeBody2>You can go directly from here</MeBody2>
				<Flex gapBetween="10">
					<a href="https://gmail.com/">
						<img src={gmailLogo} alt="" height="48px" />
					</a>
					<a href="https://outlook.com/">
						<img src={outlookLogo} alt="" height="48px" />
					</a>
					<a href="https://mail.yahoo.com/Login.html">
						<img src={yahooLogo} alt="" height="48px" />
					</a>
				</Flex>
			</div>
		);
	} else {
		return (
			<>
				<MeH5>
					<b>Sign up</b> into MeUp
				</MeH5>
				<MeButton kind="primary">
					<Google size="16" title="Get in with Google" />
					Get in with Google
				</MeButton>
				<Divider margin={{ top: 40, bottom: 20 }}>
					<div>or</div>
				</Divider>
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validationSchema={Yup.object({
						email: Yup.string().required('Required!'),
						password: Yup.string().required('Required!')
					})}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						doRegisterUser({
							variables: {
								email: values.email,
								username: generateUsername(),
								password1: values.password,
								password2: values.password
							}
						});
						setSubmitting(false);
						resetForm({});
					}}
				>
					<Form>
						<Flex direction="column" justify="space-between">
							<FormGroup width="100%">
								<label htmlFor="email">Email</label>
								<Field
									as={MeTextInput}
									name="email"
									type="email"
									width="100%"
									minWidth="230px"
									autoComplete="email"
								/>
								<ErrorMessage
									component={MeErrorMessage}
									name="email"
								/>
							</FormGroup>

							<FormGroup width="100%">
								<label htmlFor="password">New password</label>
								<Field
									width="100%"
									name="password"
									type="password"
									minWidth="350px"
									as={MeTextInput}
									autoComplete="new-password"
								/>
								<ErrorMessage
									component={MeErrorMessage}
									name="password"
								/>
							</FormGroup>
							<FlexItem margin={{ top: 36 }}>
								<MeButton type="submit" kind="primary">
									Sign up
								</MeButton>
							</FlexItem>
						</Flex>
					</Form>
				</Formik>
			</>
		);
	}
}

export default SignUpForm;
