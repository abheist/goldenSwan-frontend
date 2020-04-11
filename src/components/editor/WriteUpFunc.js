/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState, useEffect } from 'react';
import {
	Editor,
	EditorState,
	RichUtils,
	convertToRaw,
	convertFromRaw,
} from 'draft-js';
import { getBlockStyle, styleMap } from './editorUtils';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import 'draft-js/dist/Draft.css';
import './Draft.css';

// -------------- IMPORTANT ------------------------------
// DATA SAVING AND FETCHING NOT WORKING WITH LOCAL STORAGE
// -------------- IMPORTANT ------------------------------
function WriteUpFunc(props) {
	const content = window.localStorage.getItem('content');

	const [editorState, setEditorState] = useState(
		content
			? EditorState.createEmpty()
			: EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
	);

	const editor = useRef(null);

	const focusEditor = () => {
		if (editor) editor.current.focus();
	};

	useEffect(() => {
		focusEditor();
	}, []);

	useEffect(() => {
		window.localStorage.setItem(
			'content',
			JSON.stringify(
				convertToRaw(editorState.getCurrentContent(editorState))
			)
		);
	}, [editorState]);

	const handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return true;
		}
		return false;
	};

	const toggleBlockType = blockType => {
		setEditorState(RichUtils.toggleBlockType(editorState, blockType));
	};

	const toggleInlineStyle = inlineStyle => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
	};

	let className = 'RichEditor-editor';

	const contentState = editorState.getCurrentContent();
	if (!contentState.hasText()) {
		if (
			contentState
				.getBlockMap()
				.first()
				.getType() !== 'unstyled'
		) {
			className += ' RichEditor-hidePlaceholder';
		}
	}

	if (!editorState) return <div>Content Loading...</div>;

	return (
		<div className="RichEditor-root">
			<BlockStyleControls
				editorState={editorState}
				onToggle={toggleBlockType}
			/>
			<InlineStyleControls
				editorState={editorState}
				onToggle={toggleInlineStyle}
			/>
			<div className={className} onClick={focusEditor}>
				<Editor
					blockStyleFn={getBlockStyle}
					customStyleMap={styleMap}
					editorState={editorState}
					handleKeyCommand={handleKeyCommand}
					onChange={setEditorState}
					ref={editor}
					placeholder="Tell a story..."
					spellCheck
				/>
			</div>
		</div>
	);
}

export default WriteUpFunc;
