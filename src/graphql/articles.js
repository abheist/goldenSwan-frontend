import { gql } from '@apollo/client';

export const QL_MUTATION_CREATE_ARTICLE = gql`
	mutation createArticle($title: String!, $content: String!) {
		createArticle(title: $title, content: $content) {
			article {
				slug
				title
				content
			}
		}
	}
`;

export const QL_MUTATION_UPDATE_ARTICLE = gql`
	mutation UpdateArticle($slug: String!, $title: String, $content: String) {
		updateArticle(slug: $slug, title: $title, content: $content) {
			article {
				slug
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
			slug
			title
			author {
				slug
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
			slug
			content
			created
			updated
		}
	}
`;
