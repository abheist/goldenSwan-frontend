import { gql } from '@apollo/client';

export const QL_QUERY_PROFILE = gql`
	query user($username: String!) {
		user(username: $username) {
			id
			username
			firstName
			lastName
			isActive
			articleSet {
				slug
				title
				subtitle
				content
				created
				updated
				published
			}
		}
	}
`;

export const QL_MUTATION_UPDATE_USER = gql`
	mutation UpdateUser($pk: ID!, $firstname: String, $file: Upload) {
		updateUser(pk: $pk, firstName: $firstname, profilePic: $file) {
			user {
				id
				username
				firstName
				profilePic
			}
		}
	}
`;
