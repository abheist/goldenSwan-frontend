/* eslint-disable jsx-a11y/click-events-have-key-events,no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useMutation } from '@apollo/client';
import { convertFromRaw, convertToRaw, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { useEffect, useRef, useState } from 'react';
import { QL_MUTATION_UPDATE_ARTICLE } from '../../graphql/articles';
import MeButton from '../styles/MeButton';
import { MeTextInput } from '../styles/MeTextInput';
import { MeH1, MeH2 } from '../styles/Typography';
import BlockStyleControls from './BlockStyleControls';
import './Draft.css';
import { getBlockStyle, styleMap } from './editorUtils';
import InlineStyleControls from './InlineStyleControls';

function WriteUpFunc({
	articleTitle,
	articleSubTitle,
	articlePublished,
	articleSlug,
	articleContent,
	readOnly,
}) {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createWithContent(convertFromRaw(JSON.parse(articleContent)))
	);

	const [title, setTitle] = useState(articleTitle || '');
	const [subtitle, setSubtitle] = useState(articleSubTitle || '');
	const [published, setPublished] = useState(articlePublished || false);

	const [updateArticle, { data: updatedArticle }] = useMutation(QL_MUTATION_UPDATE_ARTICLE);

	const editor = useRef(null);
	function focusEditor() {
		editor.current.focus();
	}
	useEffect(() => {
		focusEditor();
	}, []);

	useEffect(() => {
		// console.log('updated');
	}, [updatedArticle]);

	useEffect(() => {
		if (!readOnly) {
			const currentContent = editorState.getCurrentContent();
			if (articleSlug && currentContent.hasText()) {
				updateArticle({
					variables: {
						slug: articleSlug,
						title: title || '',
						subtitle: subtitle || '',
						content: JSON.stringify(convertToRaw(currentContent)),
						published,
					},
				});
			} else {
				// console.log('no slug or content');
			}
		}
	}, [readOnly, editorState, articleSlug, updateArticle, title, subtitle, published]);

	const handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return true;
		}
		return false;
	};

	const publisheArticle = () => {
		setPublished(true);
	};

	const toggleBlockType = (blockType) => {
		setEditorState(RichUtils.toggleBlockType(editorState, blockType));
	};

	const toggleInlineStyle = (inlineStyle) => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
	};

	let className = 'RichEditor-editor';
	const contentState = editorState.getCurrentContent();
	if (!contentState.hasText()) {
		if (contentState.getBlockMap().first().getType() !== 'unstyled') {
			className += ' RichEditor-hidePlaceholder';
		}
	}

	if (!editorState && !articleSlug) return <div>Content Loading...</div>;
	return (
		<>
			{readOnly ? (
				<>
					<MeH1>{title}</MeH1>
					<MeH2>{subtitle}</MeH2>
				</>
			) : (
				<>
					<MeButton onClick={publisheArticle}>Publish</MeButton>
					<MeTextInput
						width="100%"
						margin={{ top: 20 }}
						height="50px"
						placeholder="Title"
						fontSize="24px"
						value={title}
						disabled={readOnly}
						onChange={(event) => setTitle(event.target.value)}
					/>
					<MeTextInput
						width="100%"
						margin={{ bottom: 20 }}
						height="40px"
						placeholder="Subtitle"
						fontSize="20px"
						disabled={readOnly}
						value={subtitle}
						onChange={(event) => setSubtitle(event.target.value)}
					/>
				</>
			)}
			<div className="RichEditor-root">
				{!readOnly && (
					<>
						<BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
						<InlineStyleControls
							editorState={editorState}
							onToggle={toggleInlineStyle}
						/>
					</>
				)}
				<div className={className} onClick={focusEditor}>
					<Editor
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={handleKeyCommand}
						onChange={(newEditorState) => setEditorState(newEditorState)}
						ref={editor}
						placeholder="Tell a story..."
						spellCheck
						readOnly={readOnly}
					/>
				</div>
			</div>
		</>
	);
}

export default WriteUpFunc;
