import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { QL_MUTATION_PASSWORD_RESET_WITHOUT_OLD_PASSWORD } from '../../graphql/mutations/authentication';
import { Flex, FlexItem } from '../styles/Flex';
import MeButton from '../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../styles/MeTextInput';

function PasswordResetForm() {
	const [doPasswordChange, { data }] = useMutation(
		QL_MUTATION_PASSWORD_RESET_WITHOUT_OLD_PASSWORD
	);

	const { token } = useParams();

	if (data?.passwordReset?.success) {
		toast('🎉 Password reset done!!!');
		return <Redirect to="/" />;
	}
	return (
		<Flex fill="true" justify="center" align="center">
			<Formik
				initialValues={{
					password: '',
				}}
				validationSchema={Yup.object({
					password: Yup.string().required('Required!'),
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					doPasswordChange({
						variables: {
							token,
							newPassword1: values.password,
							newPassword2: values.password,
						},
					});
					setSubmitting(false);
					resetForm({});
				}}
			>
				<Form>
					<Flex direction="column" justify="space-between">
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
							<ErrorMessage component={MeErrorMessage} name="password" />
						</FormGroup>
						<FlexItem margin={{ top: 36 }}>
							<MeButton type="submit" kind="primary">
								Reset password
							</MeButton>
						</FlexItem>
					</Flex>
				</Form>
			</Formik>
		</Flex>
	);
}

export default PasswordResetForm;
