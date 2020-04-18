import { gql } from '@apollo/client';

export const QL_MUTATION_CREATE_ARTICLE = gql`
	mutation createArticle($title: String!, $subtitle: String, $content: String!) {
		createArticle(title: $title, subtitle: $subtitle, content: $content) {
			article {
				slug
				title
				subtitle
				content
			}
		}
	}
`;

export const QL_MUTATION_UPDATE_ARTICLE = gql`
	mutation UpdateArticle($slug: String!, $title: String, $subtitle: String, $content: String) {
		updateArticle(slug: $slug, title: $title, subtitle: $subtitle, content: $content) {
			article {
				slug
				title
				subtitle
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
