import React from 'react';
import { COLOR_DANGER } from '../styles/ThemeConstants';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

function WriteBox() {
	return (
		<div
			css={`
				background: ${COLOR_DANGER};
			`}
		>
			<div>whats</div>
		</div>
	);
}

export default WriteBox;
