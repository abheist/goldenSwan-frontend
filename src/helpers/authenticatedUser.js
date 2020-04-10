import {
	setLocalToken,
	setLocalRefreshToken,
	setLocalExpTime,
} from './authService';

const setRefreshTokenContent = data => {
	if (data?.refreshToken?.success) {
		setLocalToken(data.refreshToken.token);
		setLocalRefreshToken(data.refreshToken.refreshToken);
		setLocalExpTime(data.refreshToken.payload.exp);
	}
};

const generateUsername = () =>
	Math.random()
		.toString(36)
		.substring(2, 15) +
	Math.random()
		.toString(36)
		.substring(2, 15);

export { setRefreshTokenContent, generateUsername };
