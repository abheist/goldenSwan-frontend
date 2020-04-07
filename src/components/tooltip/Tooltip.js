import React from 'react';
import {
	useTooltipState,
	Tooltip as ReakitTooltip,
	TooltipReference
} from 'reakit/Tooltip';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { COLOR_LIGHT, COLOR_DARK } from '../styles/ThemeConstants';

function Tooltip({ children, title, ...props }) {
	const tooltip = useTooltipState();
	return (
		<>
			<TooltipReference {...tooltip} {...children.props}>
				{referenceProps => React.cloneElement(children, referenceProps)}
			</TooltipReference>
			<ReakitTooltip
				{...tooltip}
				{...props}
				css={`
					font-size: 12px;
					padding: 4px 8px;
					background: ${COLOR_DARK};
					color: ${COLOR_LIGHT};
					border-radius: 20px;
				`}
			>
				{title}
			</ReakitTooltip>
		</>
	);
}

export default Tooltip;
