import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/link-error';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../assets/Inter/inter.css';
import { UserContextProvider } from '../../contexts/UserContext';
import {
	getLocalRefreshToken,
	getLocalToken,
	logoutUser,
	setLocalExpTime,
	setLocalRefreshToken,
	setLocalToken,
} from '../../helpers/authService';
import AppHandler from '../appHandler/AppHandler';
import Theme from '../styles/Theme';
import './App.css';

const BASE_URL =
	process.env.NODE_ENV !== 'production'
		? 'http://127.0.0.1:8000/graphql/'
		: 'https://me-up.herokuapp.com/graphql/';

function App() {
	const httpLink = new HttpLink({
		uri: BASE_URL,
	});

	const errorLink = onError(({ graphQLErrors, operation, response, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.message === 'Signature has expired') {
					const refreshToken = getLocalRefreshToken();
					const oldHeaders = operation.getContext().headers;
					response.errors = null;
					fetch(BASE_URL, {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: `{"query":"mutation {\\n    refreshToken(refreshToken: \\"${refreshToken}\\") {\\n        token\\n        payload\\n        success\\n        errors\\n        refreshToken\\n    }\\n}"}`,
					})
						.then((result) => result.json())
						.then((result) => {
							if (result?.data?.refreshToken?.success) {
								operation.setContext({
									headers: {
										...oldHeaders,
										Authorization: `JWT ${result.data.refreshToken.token}`,
									},
								});
								setLocalToken(result.data.refreshToken.token);
								setLocalRefreshToken(result.data.refreshToken.refreshToken);
								setLocalExpTime(result.data.refreshToken.payload?.exp);
								return forward(operation);
							}
							logoutUser();
							return null;
						});
				}
			}
		}
		return '';
	});

	const authLink = setContext((_, { headers }) => {
		const localToken = getLocalToken();
		return {
			headers: {
				...headers,
				Authorization: localToken ? `JWT ${localToken}` : undefined,
			},
		};
	});

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(errorLink.concat(httpLink)),
		onError: (err) => {
			// TODO: add error handling here
		},
	});

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Theme>
					<ToastContainer />
					<UserContextProvider>
						<AppHandler />
					</UserContextProvider>
				</Theme>
			</ApolloProvider>
		</BrowserRouter>
	);
}

export default App;
