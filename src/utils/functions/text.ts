import wordEndingDict from '@/const/word_ending_dict';
import { isFloat } from './number';

export const combineWordsWithNumber = (number: number, text: string): string => {
  let endNumber = 0;
  const numberCopy = number;

  const wordsInText = text.split(' ');

  if (isFloat(numberCopy)) {
    return `${wordsInText.map((word, index) => word + wordEndingDict[text][1][index]).join(' ')}`;
  }

  if (
    (
      (numberCopy % 100 >= 5) && (numberCopy % 100 <= 20))
      || (
        (
          (numberCopy % 10 >= 5)
          && (numberCopy % 10 <= 9)
        )
        || (numberCopy % 10 === 0)
      )
  ) endNumber = 2;
  else if (
    (numberCopy % 10 >= 2)
    && (numberCopy % 10 <= 4)
    && (numberCopy % 100 !== 12)
    && (numberCopy % 100 !== 13)
    && (numberCopy % 100 !== 14)
  ) endNumber = 1;
  else if ((numberCopy % 100 !== 11) && (numberCopy % 10 === 1)) endNumber = 0;
  return `${wordsInText.map((word, index) => word + wordEndingDict[text][endNumber][index]).join(' ')}`;
};

export const removeBrFromText = (text: string): string => text.replace(/<[br\s/]{3,4}>/, '');
