import React, { useEffect, useState } from 'react';
import { useImage } from 'use-cloudinary';
import ProfilePic from '../profile/profilePic';

function ImageRender({ publicId: propPublicId, transformations }) {
	const [publicId, setPublicId] = useState(propPublicId);
	const [currentImage, setCurrentImage] = useState(null);
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

	useEffect(() => {
		if (currentImage !== data) {
			setCurrentImage(data);
		}
	}, [data]);

	if (status === 'loading') return <div>Loading...</div>;

	if (error) return <div>error...</div>;

	return (
		<>
			<ProfilePic
				background={currentImage}
				type="file"
				accept="image/*"
				onChange={(e) => {
					const reader = new FileReader();
					const file = e.target.files[0];
					reader.onload = (ev) => {
						setCurrentImage(ev.target.result);
					};
					reader.readAsDataURL(file);
				}}
			/>
		</>
	);
}

export default ImageRender;
