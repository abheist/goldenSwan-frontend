import { gql } from '@apollo/client';

// export const QL_QUERY_USERS = gql`
//     users {
//         id
//         username
//         firstName
//         lastName
//         isActive
//     }
// `;

const QL_QUERY_PROFILE = gql`
	query user($userId: ID!) {
		user(userId: $userId) {
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

export default QL_QUERY_PROFILE;

// export const QL_QUERY_USER_SEARCH = gql``;
