import { gql } from '@apollo/client';

export const QL_TYPE_USERS = gql`
	{
		users {
			id
			email
			username
		}
	}
`;

export const QL_TYPE_USER = gql``;
