import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Flex } from '../../styles/Flex';
import MeButton from '../../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../../styles/MeTextInput';
import Spacer from '../../styles/Spacer';
import { ProfilePic } from '../profileComponents';

function EditProfile(props) {
	return (
		<>
			<Flex direction="column" align="center">
				<ProfilePic background="https://placekitten.com/120/120" />
				<Spacer height="40px" />
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
					}}
					validationSchema={Yup.object({
						firstname: Yup.string().required('Required!'),
						lastname: Yup.string().required('Required!'),
					})}
					onSubmit={(values) => {}}
				>
					<Form>
						<Flex justify="space-between" wrap="wrap">
							<FormGroup width="calc(50% - 30px)">
								<label htmlFor="firstname">First name</label>
								<Field
									as={MeTextInput}
									name="firstname"
									type="text"
									placeholder="Gautama"
								/>
								<ErrorMessage component={MeErrorMessage} name="firstname" />
							</FormGroup>
							<FormGroup width="calc(50% - 30px)">
								<label htmlFor="lastname">Last name</label>
								<Field
									as={MeTextInput}
									name="lastname"
									type="text"
									placeholder="Buddha"
								/>
								<ErrorMessage component={MeErrorMessage} name="lastname" />
							</FormGroup>
							<FormGroup width="100%">
								<label htmlFor="bio">Bio</label>
								<Field
									as={MeTextInput}
									name="bio"
									type="text"
									width="100%"
									placeholder="Philosopher, meditator, spiritual teacher..."
								/>
								<ErrorMessage component={MeErrorMessage} name="bio" />
							</FormGroup>
						</Flex>
						<Flex justify="flex-end">
							<MeButton type="submit" kind="primary">
								Save
							</MeButton>
						</Flex>
					</Form>
				</Formik>
			</Flex>
		</>
	);
}

export default EditProfile;
