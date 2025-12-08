export const convertHyphenToCamelCase = (str: string): string =>
	str.replace(/-([a-zA-Z0-9])/g, (_, char) => char.toUpperCase());
