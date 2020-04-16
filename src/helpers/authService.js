export const AUTH_TOKEN_NAME = 'meup_token';
export const AUTH_REFRESH_TOKEN_NAME = 'meup_refresh_token';
export const USERNAME = 'username';
export const AUTH_TOKEN_ORIGIN_TIME = 'meup_origin_time';
export const AUTH_TOKEN_EXPIRY_TIME = 'meup_expiry_time';

export const getLocalToken = () => window.localStorage.getItem(AUTH_TOKEN_NAME);

export const getLocalRefreshToken = () => window.localStorage.getItem(AUTH_REFRESH_TOKEN_NAME);

export const getLocalExpTime = () => window.localStorage.getItem(AUTH_TOKEN_EXPIRY_TIME);

export const setLocalToken = (token) => {
	window.localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const setLocalRefreshToken = (token) => {
	window.localStorage.setItem(AUTH_REFRESH_TOKEN_NAME, token);
};

export const setLocalExpTime = (token) => {
	window.localStorage.setItem(AUTH_TOKEN_EXPIRY_TIME, token);
};
