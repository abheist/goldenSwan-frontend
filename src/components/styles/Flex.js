import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { COLORS } from './ThemeConstants';

export const FlexItem = styled.div`
	box-sizing: border-box;
	${props => props.direction && `flex-direction: ${props.direction};`}
	${props => props.justify && `justify-content: ${props.justify};`}
	${props => props.content && `align-content: ${props.content};`}
	${props => props.align && `align-items: ${props.align};`}
	${props => props.wrap && `flex-wrap: ${props.wrap};`}
	${props => props.flex && `flex: ${props.flex};`}
	${props => props.order && `order: ${props.order};`}
	${props => props.self && `align-self: ${props.self};`}
	${props =>
		props.padding &&
		props.padding.top &&
		`padding-top: ${props.padding.top + 'px'};`}
	${props =>
		props.padding &&
		props.padding.right &&
		`padding-right: ${props.padding.right + 'px'};`}
	${props =>
		props.padding &&
		props.padding.bottom &&
		`padding-bottom: ${props.padding.bottom + 'px'};`}
	${props =>
		props.padding &&
		props.padding.left &&
		`padding-left: ${props.padding.left + 'px'};`}

	${props =>
		props.margin &&
		props.margin.top &&
		`margin-top: ${props.margin.top + 'px'};`}
	${props =>
		props.margin &&
		props.margin.right &&
		`margin-right: ${props.margin.right + 'px'};`}
	${props =>
		props.margin &&
		props.margin.bottom &&
		`margin-bottom: ${props.margin.bottom + 'px'};`}
	${props =>
		props.margin &&
		props.margin.left &&
		`margin-left: ${props.margin.left + 'px'};`}
	${props => props.height && `height: ${props.height};`}
	${props => props.width && `width: ${props.width};`}
	${props => props.minWidth && `min-width: ${props.minWidth + 'px'};`}
	${props => props.maxWidth && `max-width: ${props.maxWidth + 'px'};`}
	${props => props.background && `background: ${props.background};`}
	${props =>
		props.fill &&
		`
			width: 100%;
			height: 100%;
			min-width: 100%;
			min-height: 100%;
		`}
	${props =>
		props.gap &&
		`
		div, span, a, button, p, img {
			${props.gap && `margin: ${props.gap + 'px'};`}
		}
	`}
	${props =>
		props.gapBetween &&
		`
		div, span, a, button, p, img {
			margin: ${props.gapBetween + 'px'};
		}

		div:first-child,
		span:first-child,
		a:first-child,
		button:first-child,
		p:first-child,
		img:first-child {
			margin-left: 0;
		}

		div:last-child,
		span:last-child,
		a:last-child,
		button:last-child,
		p:last-child,
		img:last-child {
			margin-right: 0;
		}
	`}
`;

export const Flex = styled(FlexItem)`
	display: flex !important;
`;

FlexItem.propTypes = {
	direction: PropTypes.oneOf([
		'row',
		'row-reverse',
		'column',
		'column-reverse'
	]),
	justify: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around ',
		'space-evenly'
	]),
	content: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'stretch',
		'baseline'
	]),
	align: PropTypes.oneOf([
		'stretch',
		'flex-start',
		'flex-end',
		'center',
		'baseline'
	]),
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	flex: PropTypes.oneOf([
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12'
	]),
	order: PropTypes.oneOf([
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12'
	]),
	self: PropTypes.oneOf([
		'auto',
		'flex-start',
		'flex-end',
		'center',
		'baseline',
		'stretch'
	]),
	margin: PropTypes.shape({
		top: PropTypes.number,
		right: PropTypes.number,
		bottom: PropTypes.number,
		left: PropTypes.number
	}),
	height: PropTypes.string,
	width: PropTypes.string,
	minWidth: PropTypes.string,
	maxWidth: PropTypes.string,
	background: COLORS,
	fill: PropTypes.string,
	padding: PropTypes.shape({
		top: PropTypes.number,
		right: PropTypes.number,
		bottom: PropTypes.number,
		left: PropTypes.number
	})
};
