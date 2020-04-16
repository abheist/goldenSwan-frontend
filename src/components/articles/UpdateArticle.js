import React from 'react';
import WriteUpFunc from '../editor/WriteUpFunc';

function updateArticle({ articleId }) {
	return <WriteUpFunc articleId={articleId} />;
}

export default updateArticle;
