import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLOR_DARK } from '../styles/ThemeConstants';
import { MeCaption, MeH5 } from '../styles/Typography';

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

function BlogCard({ maxWidth }) {
	return (
		<>
			<div
				css={`
					background: #fff;
				`}
			>
				<Link to="#">
					<BlogImg background="https://placekitten.com/300/200" />
				</Link>
				<div
					css={`
						padding: 0 16px 8px;
					`}
				>
					<Link to="#">
						<MeH5
							padding={{ top: '16px', bottom: '8px' }}
							margin={{ top: 'unset', bottom: 'unset' }}
							color={COLOR_DARK}
						>
							Officia duis sunt laborum deserunt esse sint sint elit culpa nostrud.
							Dolore velit
						</MeH5>
					</Link>
					<Link to="#">
						<MeCaption color={COLOR_DARK}>
							Tempor do officia occaecat nisi. Nulla ullamco aute aliqua occaecat
							velit. Ullamco in esse excepteur officia ea dolore occaecat cillum sit.
							Incididunt amet minim velit ipsum aliqua eu qui tempor dolor minim
							ullamco. Sit magna in est culpa voluptate sit.
						</MeCaption>
					</Link>
					<Link to="#">
						<MeCaption color={COLOR_DARK}>June 20, 2014</MeCaption>
					</Link>
				</div>
			</div>
		</>
	);
}

export default BlogCard;
