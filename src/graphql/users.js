import { gql } from '@apollo/client';

export const QL_QUERY_PROFILE = gql`
	query user($username: String!) {
		user(username: $username) {
			id
			username
			firstName
			lastName
			isActive
			email
			dob
			bio
			profilePic
			facebook
			twitter
			instagram
			linkedin
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
	mutation UpdateUser(
		$pk: ID!
		$firstname: String
		$lastname: String
		$username: String
		$email: String
		$dob: String
		$bio: String
		$facebook: String
		$twitter: String
		$instagram: String
		$linkedin: String
	) {
		updateUser(
			pk: $pk
			firstName: $firstname
			lastName: $lastname
			username: $username
			email: $email
			dob: $dob
			bio: $bio
			facebook: $facebook
			twitter: $twitter
			instagram: $instagram
			linkedin: $linkedin
		) {
			user {
				id
				firstName
				lastName
				username
				email
				dob
				bio
				profilePic
				facebook
				twitter
				instagram
				linkedin
			}
		}
	}
`;
