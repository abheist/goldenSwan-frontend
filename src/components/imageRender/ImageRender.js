import React, { useEffect } from 'react';
import { useImage } from 'use-cloudinary';
import ProfilePic from '../profile/profilePic';

function ImageRender({ publicId, transformations }) {
	const { getImage, data, status, error } = useImage({ cloud_name: 'abheist' });

	useEffect(() => {
		if (publicId) {
			getImage({
				public_id: publicId,
				transform_options: {
					...transformations,
				},
			});
		}
		// eslint-disable-next-line
	}, [publicId, transformations]);

	if (status === 'loading') return <div>Loading...</div>;

	if (error) return <div>error...</div>;

	return (
		<>
			<ProfilePic background={data || ''} />
		</>
	);
}

export default ImageRender;
