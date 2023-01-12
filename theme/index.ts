import { HTMLColors } from './enums/html-colors.enum';
import { Themes } from './enums/themes.enum';

const lightThemeColors = {
	primary: HTMLColors.blue,
};

const darkThemeColors = {
	primary: HTMLColors.forestGreen,
};

export const Theme = (theme: Themes) => {
	const palette = theme === Themes.light ? lightThemeColors : darkThemeColors;

	return {
		colors: {
			blues: {},
			reds: {},
			palette,
		},
	};
};
