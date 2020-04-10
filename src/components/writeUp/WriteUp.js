import { Editor, EditorState, RichUtils } from 'draft-js';
import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { COLOR_LIGHT } from '../styles/ThemeConstants';

function WriteUp() {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const handleKeyCommand = (command, localEditorState) => {
		const newState = RichUtils.handleKeyCommand(localEditorState, command);
		if (newState) setEditorState(newState);
	};

	return (
		<div
			css={`
				background: ${COLOR_LIGHT};
				width: 1200px;
				margin-left: -50%;
				min-height: 500px;
			`}
		>
			<Editor
				editorState={editorState}
				onChange={setEditorState}
				handleKeyCommand={handleKeyCommand}
			/>
		</div>
	);
}

export default WriteUp;
