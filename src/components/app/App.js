import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/link-error';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../assets/Inter/inter.css';
import {
	getLocalRefreshToken,
	getLocalToken,
	setLocalExpTime,
	setLocalRefreshToken,
	setLocalToken,
} from '../../helpers/authService';
import AppHandler from '../appHandler/AppHandler';
import Theme from '../styles/Theme';
import './App.css';

function App() {
	const httpLink = new HttpLink({
		uri: 'http://127.0.0.1:8000/graphql/',
	});

	const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.message === 'Signature has expired') {
					const refreshToken = getLocalRefreshToken();
					const oldHeaders = operation.getContext().headers;
					fetch('http://localhost:8000/graphql/', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: `{"query":"mutation {\\n    refreshToken(refreshToken: \\"${refreshToken}\\") {\\n        token\\n        payload\\n        success\\n        errors\\n        refreshToken\\n    }\\n}"}`,
					})
						.then((response) => response.json())
						.then((result) => {
							if (result.data.refreshToken.success) {
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
							return forward(operation);
						})
						.catch((err) => {
							console.log(err);
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
		onError: (e) => {
			console.log(e);
		},
	});

	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Theme>
					<ToastContainer />
					<AppHandler />
				</Theme>
			</ApolloProvider>
		</BrowserRouter>
	);
}

export default App;
