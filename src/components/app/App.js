import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from '../styles/Theme';
import {
	ApolloProvider,
	ApolloClient,
	HttpLink,
	InMemoryCache
} from '@apollo/client';
import AppHandler from '../appHandler/AppHandler';
import { setContext } from '@apollo/link-context';
import { AUTH_TOKEN_NAME } from '../../helpers/authService';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
	const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql/' });

	const authLink = setContext((_, { headers }) => {
		const localToken = localStorage.getItem(AUTH_TOKEN_NAME);
		return {
			headers: {
				...headers,
				authorization: localToken ? `JWT ${localToken}` : undefined
			}
		};
	});

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink)
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
