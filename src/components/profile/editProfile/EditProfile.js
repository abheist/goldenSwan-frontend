import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Facebook, Instagram, Linkedin, Twitter } from 'styled-icons/feather';
import { Flex, FlexItem } from '../../styles/Flex';
import MeButton from '../../styles/MeButton';
import { MeErrorMessage, MeTextInput } from '../../styles/MeTextInput';
import Spacer from '../../styles/Spacer';
import { MeH6 } from '../../styles/Typography';
import PrefixIcon from '../../styles/PrefixIcon';
import FormGroup from '../../styles/FormGroup';
import ProfilePic from '../profilePic';

function EditProfile() {
	return (
		<>
			<Flex direction="column" align="center" maxWidth="980px" margin={{ top: 20 }}>
				<ProfilePic background="https://placekitten.com/120/120" />
				<Spacer height="40px" />
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
						bio: '',
						facebook: '',
						twitter: '',
						instagram: '',
						linkedin: '',
					}}
					validationSchema={Yup.object({
						firstname: Yup.string().required('Required!'),
						lastname: Yup.string().required('Required!'),
						facebook: Yup.string(),
						twitter: Yup.string(),
						instagram: Yup.string(),
						linkedin: Yup.string(),
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
