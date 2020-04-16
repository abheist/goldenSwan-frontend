import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import gmailLogo from '../../assets/img/gmailLogo.svg';
import yahooLogo from '../../assets/img/outlookLogo.svg';
import outlookLogo from '../../assets/img/yahooMailLogo.svg';
import { QL_MUTATION_SEND_RESET_PASSWORD_EMAIL } from '../../graphql/mutations/authentication';
import { Flex, FlexItem } from '../styles/Flex';
import MeButton from '../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../styles/MeTextInput';
import { COLOR_PRIMARY, COLOR_PRIMARY_DARK } from '../styles/ThemeConstants';
import { MeBody2, MeCaption, MeH4, MeH5, MeH6 } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars

function ForgotPasswordForm() {
	const [sendResetPasswordEmail, { data }] = useMutation(QL_MUTATION_SEND_RESET_PASSWORD_EMAIL);

	if (data?.sendPasswordResetEmail?.success) {
		return (
			<div
				css={`
					width: 400px;
				`}
			>
				<MailSend size="64" color={COLOR_PRIMARY} />
				<MeH4 color={COLOR_PRIMARY}>Email sent!</MeH4>
				<MeH6>Please check your email for password reset link.</MeH6>
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
	}
	return (
		<div>
			<MeH5>Forgot password?</MeH5>
			<Formik
				initialValues={{
					email: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string().required('Required!'),
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					sendResetPasswordEmail({
						variables: {
							email: values.email,
						},
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
								minWidth="300px"
								autoComplete="email"
							/>
							<ErrorMessage component={MeErrorMessage} name="email" />
						</FormGroup>

						<FlexItem margin={{ top: 10 }}>
							<MeButton type="submit" kind="primary">
								Send password reset email
							</MeButton>
						</FlexItem>
						<MeCaption>
							<Link to="/">
								<ArrowBack
									size="14"
									color={COLOR_PRIMARY_DARK}
									css={`
										margin-right: 4px;
									`}
								/>
								Back to Sign up
							</Link>
						</MeCaption>
					</Flex>
				</Form>
			</Formik>
		</div>
	);
}

export default ForgotPasswordForm;
