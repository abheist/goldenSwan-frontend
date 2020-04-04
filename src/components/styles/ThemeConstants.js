import PropTypes from 'prop-types';

export const COLOR_LIGHT = '#ffffff';
export const COLOR_DARK = '#1A202C';
export const COLOR_BACKGROUND = '#f3f3f4';
export const COLOR_GRAY = '#dcdcdc';

export const COLOR_PRIMARY_LIGHT = '#ebf1ff';
export const COLOR_PRIMARY = '#3471ff';
export const COLOR_PRIMARY_DARK = '#2942ff';
export const COLOR_PRIMARY_DARKER = '#3015f9';

export const COLOR_SUCCESS_LIGHT = '#eaf6ec';
export const COLOR_SUCCESS = '#28a745';
export const COLOR_SUCCESS_DARK = '#099026';
export const COLOR_SUCCESS_DARKER = '#036323';

export const COLOR_DANGER_LIGHT = '#fbebed';
export const COLOR_DANGER = '#dc3546';
export const COLOR_DANGER_DARK = '#e7182d';
export const COLOR_DANGER_DARKER = '#ce1225';

export const COLOR_WARNING_LIGHT = '#fff9e6';
export const COLOR_WARNING = '#ffc207';
export const COLOR_WARNING_DARK = '#ffac05';
export const COLOR_WARNING_DARKER = '#ff9705';

export const FONT_SAN_SERIF =
	'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
export const FONT_MONO_SPACED =
	'source-code-pro, Menlo, Monaco, Consolas, "Courier New"';

export const SPACINGS = PropTypes.oneOf([4, 8, 16, 20, 24, 32, 40, 54]);
export const COLORS = PropTypes.oneOf([
	COLOR_LIGHT,
	COLOR_DARK,
	COLOR_BACKGROUND,
	COLOR_PRIMARY_LIGHT,
	COLOR_PRIMARY,
	COLOR_PRIMARY_DARK,
	COLOR_PRIMARY_DARKER,
	COLOR_SUCCESS_LIGHT,
	COLOR_SUCCESS,
	COLOR_SUCCESS_DARK,
	COLOR_SUCCESS_DARKER,
	COLOR_DANGER_LIGHT,
	COLOR_DANGER,
	COLOR_DANGER_DARK,
	COLOR_DANGER_DARKER,
	COLOR_WARNING_LIGHT,
	COLOR_WARNING,
	COLOR_WARNING_DARK,
	COLOR_WARNING_DARKER
]);
