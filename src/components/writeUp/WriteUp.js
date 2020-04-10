import { Editor, EditorState } from 'draft-js';
import React from 'react';

// eslint-disable-next-line no-unused-vars
import { css } from 'styled-components/macro';
import { COLOR_LIGHT } from '../styles/ThemeConstants';

function WriteUp() {
	const [editorState, setEditorState] = React.useState(
		EditorState.createEmpty()
	);
	return (
		<div
			css={`
				background: ${COLOR_LIGHT};
				width: 1200px;
				margin-left: -50%;
				min-height: 500px;
			`}
		>
			<Editor editorState={editorState} onChange={setEditorState} />
		</div>
	);
}

export default WriteUp;
