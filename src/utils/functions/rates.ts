import FEE_PAIR_LIST from '@/const/fee_pairs';
import { CurrencyUnitEnum } from '@/types/exchange';

// eslint-disable-next-line import/prefer-default-export
export const countFeePercent = (from: CurrencyUnitEnum, to: CurrencyUnitEnum): number => {
  const feePair = FEE_PAIR_LIST.find(((pair) => pair.from === from && pair.to === to));
  if (feePair) return feePair.feePercent;
  return 0;
};
