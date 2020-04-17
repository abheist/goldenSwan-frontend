import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { QL_MUTATION_CREATE_ARTICLE } from '../../graphql/articles';
import WriteUpFunc from '../editor/WriteUpFunc';

function CreateArticle() {
	const [createArticle, { data: createdArticle }] = useMutation(QL_MUTATION_CREATE_ARTICLE);
	const [articleSlug, setArticleSlug] = useState(null);
	const [articleContent, setArticleContent] = useState(null);

	useEffect(() => {
		const content = JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()));
		createArticle({
			variables: {
				title: 'something someting',
				content,
			},
		});
	}, [createArticle]);

	useEffect(() => {
		const localSlug = createdArticle?.createArticle?.article?.slug;
		if (localSlug) {
			setArticleSlug(localSlug);
			setArticleContent(createdArticle?.createArticle?.article?.content);
		}
	}, [createdArticle]);

	if (!articleSlug) return <div>Loading...</div>;

	return <WriteUpFunc articleSlug={articleSlug} articleContent={articleContent} />;
}

export default CreateArticle;
