/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import forgotPassword from '../../assets/img/clumsy.svg';
import logo from '../../assets/img/logo_white.png';
import selfieImg from '../../assets/img/open-doodles-selfie.svg';
import ForgotPasswordForm from '../forms/ForgotPassword';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
import { Flex } from '../styles/Flex';
import { COLOR_LIGHT, COLOR_PRIMARY } from '../styles/ThemeConstants';
import { MeCaption, MeLightH5, MeLightH6 } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars

function LoginSignupPage() {
	const { path } = useRouteMatch();
	return (
		<Flex fill="true" background={COLOR_LIGHT}>
			<Flex flex="1" background={COLOR_PRIMARY} padding={{ left: 60, top: 32, right: 32 }}>
				<div>
					<img src={logo} alt="MeUp Logo" height="45px" />
					<MeLightH5
						color={COLOR_LIGHT}
						css={`
							margin-top: 100px;
						`}
					>
						“Whether you are launching a start-up or leading an established company, you
						should start establishing your social media presence if you haven't already”
					</MeLightH5>
					<MeLightH6 color={COLOR_LIGHT}>- Sir Richard Branson.</MeLightH6>
					<Switch>
						<Route exact path={path}>
							<img
								src={selfieImg}
								alt="MeUp vector showing a persons"
								css={`
									width: 32%;
									max-width: 500px;
									position: absolute;
									left: 10%;
									bottom: 0;
								`}
							/>
						</Route>
						<Route path="/forgot-password/">
							<img
								src={forgotPassword}
								alt="MeUp vector showing a persons"
								css={`
									width: 50%;
									max-width: 700px;
									position: absolute;
									left: 10%;
									bottom: 0;
								`}
							/>
						</Route>
					</Switch>
				</div>
			</Flex>
			<Flex flex="3" direction="column" width="100%" padding={{ right: 60 }} height="100%">
				<Flex
					justify="flex-end"
					width="100%"
					padding={{
						top: 8,
					}}
				>
					<LoginForm />
				</Flex>
				<Flex justify="center" align="center" height="inherit">
					<div
						css={`
							margin-top: -220px;
						`}
					>
						<Switch>
							<Route exact path={path}>
								<SignUpForm />
							</Route>
							<Route path="/forgot-password/">
								<ForgotPasswordForm />
							</Route>
						</Switch>
					</div>
				</Flex>
				<Flex height="40px" justify="flex-end" align="center" gap="10">
					<MeCaption>© 2020 MeUp</MeCaption>|<MeCaption>All rights reserved.</MeCaption>|
					<MeCaption>
						<a href="https://meup.com/privacy">Privacy policies</a>
					</MeCaption>
					|
					<MeCaption>
						<a href="https://meup.com/terms">Terms & Conditions</a>
					</MeCaption>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default LoginSignupPage;
