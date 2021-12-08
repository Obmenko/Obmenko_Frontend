import { CurrencyUnitEnum } from '@/types/exchange';

type FeePair = {
  from: CurrencyUnitEnum,
  to: CurrencyUnitEnum,
  feePercent: number
}

const FEE_PAIR_LIST: FeePair[] = [
  {
    from: CurrencyUnitEnum.DOGE,
    to: CurrencyUnitEnum.TRX,
    feePercent: 2.5,
  },
  {
    from: CurrencyUnitEnum.LTC,
    to: CurrencyUnitEnum.DOGE,
    feePercent: 2.5,
  },
  {
    from: CurrencyUnitEnum.TRX,
    to: CurrencyUnitEnum.DOGE,
    feePercent: 2.5,
  },
  {
    from: CurrencyUnitEnum.MATIC,
    to: CurrencyUnitEnum.DASH,
    feePercent: 2.5,
  },
  {
    from: CurrencyUnitEnum.DASH,
    to: CurrencyUnitEnum.MATIC,
    feePercent: 2.5,
  },
  {
    from: CurrencyUnitEnum.DOGE,
    to: CurrencyUnitEnum.XLM,
    feePercent: 2.5,
  },
];

export default FEE_PAIR_LIST;
