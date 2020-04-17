import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import AppHandler from '../appHandler/AppHandler';
import { AUTH_TOKEN_NAME } from '../../helpers/authService';
import Theme from '../styles/Theme';

function App() {
	const httpLink = new HttpLink({ uri: 'http://127.0.0.1:8000/graphql/' });

	const authLink = setContext((_, { headers }) => {
		const localToken = localStorage.getItem(AUTH_TOKEN_NAME);
		return {
			headers: {
				...headers,
				Authorization: localToken ? `JWT ${localToken}` : undefined,
			},
		};
	});

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
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
