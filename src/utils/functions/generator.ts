/* eslint-disable max-len */
export const generateNumArrayBySize = (length: number, startNumber = 0): number[] => new Array(length).fill(0).map((el, elIndex) => startNumber + elIndex);

export const generateRandomIntNumber = (min = 0, max = 1): number => Math.round(Math.random() * (max - min) + min);
