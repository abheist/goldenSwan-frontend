/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
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

class WriteUp extends React.Component {
	constructor(props) {
		super(props);
		const content = window.localStorage.getItem('content');
		if (content) {
			this.state = {
				editorState: EditorState.createWithContent(
					convertFromRaw(JSON.parse(content))
				),
			};
		} else {
			this.state = { editorState: EditorState.createEmpty() };
		}
		this.editor = null;
		this.setEditorRef = element => {
			this.editor = element;
		};
		this.focusEditor = () => {
			if (this.editor) this.editor.focus();
		};
		this.onChange = editorState => this._onChange(editorState);
		this.handleKeyCommand = command => this._handleKeyCommand(command);
		this.onTab = e => this._onTab(e);
		this.toggleBlockType = type => this._toggleBlockType(type);
		this.toggleInlineStyle = style => this._toggleInlineStyle(style);
	}

	componentDidMount() {
		this.focusEditor();
	}

	saveContent = content => {
		window.localStorage.setItem(
			'content',
			JSON.stringify(convertToRaw(content))
		);
	};

	_onChange(editorState) {
		const contentState = editorState.getCurrentContent();
		this.saveContent(contentState);
		this.setState({ editorState });
	}

	_handleKeyCommand(command) {
		const { editorState } = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_toggleBlockType(blockType) {
		this.onChange(
			RichUtils.toggleBlockType(this.state.editorState, blockType)
		);
	}

	_toggleInlineStyle(inlineStyle) {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
		);
	}

	render() {
		const { editorState } = this.state;
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
		return (
			<div className="RichEditor-root">
				<BlockStyleControls
					editorState={editorState}
					onToggle={this.toggleBlockType}
				/>
				<InlineStyleControls
					editorState={editorState}
					onToggle={this.toggleInlineStyle}
				/>
				<div className={className} onClick={this.focusEditor}>
					<Editor
						blockStyleFn={getBlockStyle}
						customStyleMap={styleMap}
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						ref={this.editor}
						placeholder="Tell a story..."
						spellCheck
					/>
				</div>
			</div>
		);
	}
}

export default WriteUp;
