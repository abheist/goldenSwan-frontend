import { Editor, EditorState } from 'draft-js';
import React from 'react';

import styled from 'styled-components/macro';
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
			`}
		>
			<Editor editorState={editorState} onChange={setEditorState} />
		</div>
	);
}

export default WriteUp;
