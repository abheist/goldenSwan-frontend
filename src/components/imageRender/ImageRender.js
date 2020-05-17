import React, { useEffect } from 'react';
import { useImage } from 'use-cloudinary';
import ProfilePic from '../profile/profilePic';

function ImageRender({ publicId, transformations }) {
	const { getImage, data } = useImage({ cloud_name: 'abheist' });
	console.log('hello');
	useEffect(() => {
		getImage({
			public_id: publicId,
			transform_options: {
				...transformations,
			},
		});
	}, []);

	return (
		<>
			<ProfilePic background={data || ''} />
		</>
	);
}

export default ImageRender;
