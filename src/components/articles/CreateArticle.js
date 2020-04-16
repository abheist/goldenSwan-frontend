import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { QL_MUTATION_CREATE_ARTICLE } from '../../graphql/articles';
import WriteUpFunc from '../editor/WriteUpFunc';

function CreateArticle() {
	const [createArticle, { data: createdArticle }] = useMutation(QL_MUTATION_CREATE_ARTICLE);
	const [articleId, setArticleId] = useState(null);
	const [articleContent, setArticleContent] = useState(null);

	useEffect(() => {
		const content = JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent()));
		createArticle({
			variables: {
				title: 'something someting',
				content,
			},
		});
	}, []);

	useEffect(() => {
		const localId = createdArticle?.createArticle?.article?.id;
		if (localId) {
			setArticleId(localId);
			setArticleContent(createdArticle?.createArticle?.article?.content);
		}
	}, [createdArticle]);

	if (!articleId) return <div>Loading...</div>;

	return <WriteUpFunc articleId={articleId} articleContent={articleContent} />;
}

export default CreateArticle;
