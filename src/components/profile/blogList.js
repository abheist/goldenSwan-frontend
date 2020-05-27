import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import BlogCard from './blogCard';

function BlogList({ blogs }) {
	return (
		<>
			{blogs?.map((blog) => (
				<div
					css={`
						margin-bottom: 40px;
					`}
					key={blog.slug}
				>
					<BlogCard blog={blog} />
				</div>
			))}
		</>
	);
}

export default BlogList;
