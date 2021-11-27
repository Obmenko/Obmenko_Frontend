// eslint-disable-next-line import/prefer-default-export
export const addZeroToNumber = (number: number): string => (number < 10 ? `0${number}` : `${number}`);

export const isFloat = (number: number): boolean => number % 1 !== 0;
