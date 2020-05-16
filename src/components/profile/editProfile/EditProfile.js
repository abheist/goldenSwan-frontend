import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { useMutation, useQuery } from '@apollo/client';
import { Flex, FlexItem } from '../../styles/Flex';
import MeButton from '../../styles/MeButton';
import { MeErrorMessage, MeTextInput } from '../../styles/MeTextInput';
import Spacer from '../../styles/Spacer';
import { MeH6 } from '../../styles/Typography';
import PrefixIcon from '../../styles/PrefixIcon';
import FormGroup from '../../styles/FormGroup';
import ProfilePic from '../profilePic';

import UserContext from '../../../contexts/UserContext';
import { QL_MUTATION_UPDATE_USER, QL_QUERY_PROFILE } from '../../../graphql/users';
import { setLocalUsername } from '../../../helpers/authService';

function EditProfile() {
	const { username, dispatch } = useContext(UserContext);
	console.log(username);

	const { loading, data } = useQuery(QL_QUERY_PROFILE, {
		variables: { username },
	});

	const [
		updateProfile,
		{ data: updatedData, loading: updatedLoading, error: updatedError },
	] = useMutation(QL_MUTATION_UPDATE_USER);

	if (loading) return <>Loading...</>;

	return (
		<>
			<Flex direction="column" align="center" maxWidth="980px" margin={{ top: 20 }}>
				<ProfilePic background="https://placekitten.com/120/120" />
				<Spacer height="40px" />
				<Formik
					initialValues={{
						firstname: data?.user?.firstName,
						lastname: data?.user?.lastName,
						username: data?.user?.username,
						bio: data?.user?.bio,
						facebook: data?.user?.facebook,
						twitter: data?.user?.twitter,
						instagram: data?.user?.instagram,
						linkedin: data?.user?.linkedin,
					}}
					validationSchema={Yup.object({
						firstname: Yup.string().required('Required!'),
						lastname: Yup.string().required('Required!'),
						username: Yup.string().required('Required!'),
						bio: Yup.string(),
						facebook: Yup.string(),
						twitter: Yup.string(),
						instagram: Yup.string(),
						linkedin: Yup.string(),
					})}
					onSubmit={(values) => {
						updateProfile({
							variables: {
								...data.user,
								pk: data?.user?.id,
								firstname: values.firstname,
								lastname: values.lastname,
								username: values.username,
								bio: values.bio,
								facebook: values.facebook,
								twitter: values.twitter,
								instagram: values.instagram,
								linkedin: values.linkedin,
							},
						}).then((localdata) => {
							dispatch(localdata?.data?.updateUser?.user?.username);
						});
					}}
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
							<FormGroup width="calc(50% - 30px)">
								<Flex glow>
									<PrefixIcon>@</PrefixIcon>
									<Field
										as={MeTextInput}
										name="username"
										type="text"
										placeholder="abheist"
									/>
								</Flex>
								<ErrorMessage component={MeErrorMessage} name="username" />
							</FormGroup>
							<FormGroup width="100%">
								<label htmlFor="bio">Bio</label>
								<Field
									as={MeTextInput}
									name="bio"
									type="text"
									placeholder="Philosopher, meditator, spiritual teacher..."
								/>
								<ErrorMessage component={MeErrorMessage} name="bio" />
							</FormGroup>
							<FlexItem width="100%">
								<MeH6>Social links</MeH6>
							</FlexItem>
							<Flex width="100%" justify="space-between" wrap="wrap">
								<FormGroup width="calc(50% - 30px)">
									<Flex glow>
										<PrefixIcon>
											<Facebook />
										</PrefixIcon>
										<Field
											as={MeTextInput}
											name="facebook"
											type="text"
											placeholder="abheist"
										/>
									</Flex>
									<ErrorMessage component={MeErrorMessage} name="facebook" />
								</FormGroup>
								<FormGroup width="calc(50% - 30px)">
									<Flex glow>
										<PrefixIcon>
											<Twitter />
										</PrefixIcon>
										<Field
											as={MeTextInput}
											name="twitter"
											type="text"
											placeholder="abheist"
										/>
									</Flex>
									<ErrorMessage component={MeErrorMessage} name="twitter" />
								</FormGroup>
								<FormGroup width="calc(50% - 30px)">
									<Flex glow>
										<PrefixIcon>
											<Instagram />
										</PrefixIcon>
										<Field
											as={MeTextInput}
											name="instagram"
											type="text"
											placeholder="abheist"
										/>
									</Flex>
									<ErrorMessage component={MeErrorMessage} name="instagram" />
								</FormGroup>
								<FormGroup width="calc(50% - 30px)">
									<Flex glow>
										<PrefixIcon>
											<Linkedin />
										</PrefixIcon>
										<Field
											as={MeTextInput}
											name="linkedin"
											type="text"
											placeholder="abheist"
										/>
									</Flex>
									<ErrorMessage component={MeErrorMessage} name="linkedin" />
								</FormGroup>
							</Flex>
						</Flex>
						<Flex justify="flex-end" gapBetween="10">
							<MeButton type="submit">Cancel</MeButton>
							<MeButton type="submit" kind="primary">
								Save
							</MeButton>
						</Flex>
					</Form>
				</Formik>
			</Flex>
			<Spacer height="80px" />
		</>
	);
}

export default EditProfile;
