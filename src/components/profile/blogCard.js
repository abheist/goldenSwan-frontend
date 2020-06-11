import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLOR_DARK } from '../styles/ThemeConstants';
import { MeCaption, MeH5 } from '../styles/Typography';
import { timeAgo } from '../../helpers/utils';

const BlogImg = styled.div`
	min-width: 300px;
    ${(props) => props.background && `background: url('${props.background}');`}
    
    ${(props) => props.padding && props.padding.top && `padding-top: ${props.padding.top};`}
	${(props) => props.padding && props.padding.right && `padding-right: ${props.padding.right};`}
	${(props) => props.padding && props.padding.bottom && `padding-bottom: ${props.padding.bottom};`}
	${(props) => props.padding && props.padding.left && `padding-left: ${props.padding.left};`}

	${(props) => props.margin && props.margin.top && `margin-top: ${props.margin.top};`}
	${(props) => props.margin && props.margin.right && `margin-right: ${props.margin.right};`}
	${(props) => props.margin && props.margin.bottom && `margin-bottom: ${props.margin.bottom};`}
	${(props) => props.margin && props.margin.left && `margin-left: ${props.margin.left};`}
    
    ${(props) => `height: ${props.height || '200px'};`}
	${(props) => props.width && `width: ${props.width};`}
    ${(props) => `min-width: ${props.minWidtth || '250px'};`}
	${(props) => props.maxWidth && `max-width: ${props.maxWidth}px;`}
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

function BlogCard({ blog, editable }) {
	const viewEdit = editable ? 'edit' : 'view';
	return (
		<>
			<div
				css={`
					background: #fff;
				`}
			>
				<Link to={`/${viewEdit}/${blog.slug}`}>
					<BlogImg background="https://placekitten.com/300/200" />
				</Link>
				<div
					css={`
						padding: 0 0 8px;
					`}
				>
					<Link to={`/${viewEdit}/${blog.slug}`}>
						<MeH5
							padding={{ top: '16px', bottom: '8px' }}
							margin={{ top: 'unset', bottom: 'unset' }}
							color={COLOR_DARK}
						>
							{blog.title}
						</MeH5>
					</Link>
					<Link to={`/${viewEdit}/${blog.slug}`}>
						<MeCaption color={COLOR_DARK}>
							{blog.subtitle.substring(0, 255)}
							{blog.subtitle.length > 255 && '...'}
						</MeCaption>
					</Link>
					<Link to={`/${viewEdit}/${blog.slug}`}>
						<MeCaption color={COLOR_DARK}>{timeAgo(blog.created, true)}</MeCaption>
					</Link>
				</div>
			</div>
		</>
	);
}

export default BlogCard;
