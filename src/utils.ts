export const getClassNames = (classes: Array<string | boolean | undefined>) =>
	classes.filter(Boolean).join(' ');