import React from 'react';
import { INLINE_STYLES } from './editorUtils';
import StyleButton from './StyleButton';

const InlineStyleControls = props => {
	const currentStyle = props.editorState.getCurrentInlineStyle();
	return (
		<div className="RichEditor-controls">
			{INLINE_STYLES.map(type => (
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			))}
		</div>
	);
};

export default InlineStyleControls;
