import { gql } from '@apollo/client';

export const QL_MUTATION_CREATE_ARTICLE = gql`
	mutation createArticle($title: String!, $content: String!) {
		createArticle(title: $title, content: $content) {
			article {
				id
				title
				content
			}
		}
	}
`;

export const QL_MUTATION_UPDATE_ARTICLE = gql`
	mutation updateArticle($id: Int!, $title: String!, $content: String!) {
		updateArticle(id: $id, title: $title, content: $content) {
			article {
				id
				title
				content
			}
		}
	}
`;

export const QL_MUTATION_ARTICLES = gql`
	{
		articles {
			title
			id
			title
			author {
				id
				lastLogin
				username
				email
			}
			content
			created
			updated
		}
	}
`;

export const QL_MUTATION_ARTICLE = gql`
	query article($id: String!) {
		article(id: $id) {
			title
			id
			content
			created
			updated
		}
	}
`;
