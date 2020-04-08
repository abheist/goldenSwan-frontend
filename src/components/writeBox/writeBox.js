import React from 'react';
import {
	COLOR_LIGHT,
	COLOR_LIGHT_GRAY,
	COLOR_DANGER_LIGHT
} from '../styles/ThemeConstants';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { MeH1, MeSubtitle1 } from '../styles/Typography';

function WriteBox() {
	return (
		<div
			css={`
				background: ${COLOR_LIGHT};
				width: 100%;
				padding: 16px 24px 24px;
				background: ${COLOR_LIGHT};
				border-radius: 8px;
				box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
			`}
		>
			<div
				css={`
					height: 60px;
					background: ${COLOR_LIGHT_GRAY};
					background-color: ${COLOR_DANGER_LIGHT}
					border-radius: 20px;
				`}
			></div>
		</div>
	);
}

export default WriteBox;
