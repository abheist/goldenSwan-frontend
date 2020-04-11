import React from 'react';
import { BLOCK_TYPES } from './editorUtils';
import StyleButton from './StyleButton';

const BlockStyleControls = ({ editorState, onToggle }) => {
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

	return (
		<div className="RichEditor-controls">
			{BLOCK_TYPES.map(type => (
				<StyleButton
					key={type.label}
					active={type.style === blockType}
					label={type.label}
					onToggle={onToggle}
					style={type.style}
				/>
			))}
		</div>
	);
};

export default BlockStyleControls;
