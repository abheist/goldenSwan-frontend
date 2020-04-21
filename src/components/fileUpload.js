import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileUpload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			files: [
				{
					source: 'index.html',
					options: {
						type: 'local',
					},
				},
			],
		};
	}

	handleInit() {
		console.log('FilePond instance has initialised', this.pond);
	}

	render() {
		return (
			<FilePond
				ref={(ref) => (this.pond = ref)}
				files={this.state.files}
				allowMultiple
				maxFiles={3}
				server="/api"
				oninit={() => this.handleInit()}
				onupdatefiles={(fileItems) => {
					this.setState({
						files: fileItems.map((fileItem) => fileItem.file),
					});
				}}
			/>
		);
	}
}

export default FileUpload;
