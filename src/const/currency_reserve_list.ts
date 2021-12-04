import AlphaImg from '@/assets/img/logos/alpha.jpg';
import TetherImg from '@/assets/img/logos/tether.jpg';
import TrueUsdImg from '@/assets/img/logos/true_usd.jpg';
import VtbImg from '@/assets/img/logos/vtb.jpg';
import BinanceCoinImg from '@/assets/img/logos/binance_coin.jpg';
import DogecoinImg from '@/assets/img/logos/dogecoin.jpg';
import RippleImg from '@/assets/img/logos/ripple.jpg';
import TinkoffImg from '@/assets/img/logos/tinkoff.jpg';
import TronTrxImg from '@/assets/img/logos/tron_trx.jpg';
import UsdCoinImg from '@/assets/img/logos/usd_coin.jpg';

export type CurrencyItem = {
  img: string;
  title: string;
  value: number;
}

const CURRENCY_RESERVE_LIST: CurrencyItem[] = [
  {
    img: VtbImg,
    title: 'ВТБ24 RUB',
    value: 5000000,
  },
  {
    img: AlphaImg,
    title: 'Альфа-Клик RUB',
    value: 5000000,
  },
  {
    img: RippleImg,
    title: 'Ripple xrp2',
    value: 0,
  },
  {
    img: DogecoinImg,
    title: 'Dogecoin DOGE',
    value: 15000000,
  },
  {
    img: TrueUsdImg,
    title: 'True USD TUSD',
    value: 11529.49783625,
  },
  {
    img: UsdCoinImg,
    title: 'USD Coin USDC',
    value: 5000000,
  },
  {
    img: BinanceCoinImg,
    title: 'Binance Coin BNB',
    value: 2477.56,
  },
  {
    img: TronTrxImg,
    title: 'Tron TRX',
    value: 14535057.2,
  },
  {
    img: TetherImg,
    title: 'Tether TRC-20 USDT',
    value: 200000,
  },
  {
    img: TinkoffImg,
    title: 'Тинькофф Cash-in RUB',
    value: 4000000,
  },
  {
    img: AlphaImg,
    title: 'Альфа Сash-in RUB',
    value: 4000000,
  },
  {
    img: BinanceCoinImg,
    title: 'Binance Coin BNBMEMO2',
    value: 0,
  },
];

export default CURRENCY_RESERVE_LIST;
