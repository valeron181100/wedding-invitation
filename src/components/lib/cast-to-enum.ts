export const castToEnum = <T extends Record<string, string | number>>(
	enumObj: T,
	value: string | number,
): T[keyof T] | null => {
	return (Object.values(enumObj) as (string | number)[]).includes(value)
		? (value as T[keyof T])
		: null;
};
