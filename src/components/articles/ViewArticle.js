import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import WriteUpFunc from '../editor/WriteUpFunc';
import { QL_MUTATION_ARTICLE } from '../../graphql/articles';

function ViewArticle() {
	const { articleSlug } = useParams();
	const { loading, error, data } = useQuery(QL_MUTATION_ARTICLE, {
		variables: { slug: articleSlug },
	});

	if (loading) return <div>loading</div>;
	if (error) return <div>Error!!!</div>;

	return (
		<WriteUpFunc
			articleSlug={articleSlug}
			articleTitle={data.article.title}
			articleContent={data.article.content}
			readOnly
		/>
	);
}

export default ViewArticle;
