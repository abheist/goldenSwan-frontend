import * as React from 'react';
import BlogCard from './blogCard';
import { Flex, FlexItem } from '../styles/Flex';

function BlogList({ blogs }) {
	return (
		<Flex justify="space-between" wrap="wrap" maxWidth="980px">
			{blogs.map((blog) => (
				<FlexItem
					flex="4"
					minWidth="300px"
					margin={{ bottom: 40, left: 5, right: 5 }}
					key={blog.slug}
				>
					<BlogCard blog={blog} />
				</FlexItem>
			))}
		</Flex>
	);
}

export default BlogList;
