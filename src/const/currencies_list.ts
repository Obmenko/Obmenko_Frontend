import BitcoinImg from '@/assets/img/currency/bitcoin.svg';
import SberRubImg from '@/assets/img/currency/sber_rub.png';
// import AdpayQiwiImg from '@/assets/img/currency/adpayqiwi.svg';
// import AlphaBankImg from '@/assets/img/currency/alfabank.svg';
import BinanceImg from '@/assets/img/currency/binance.svg';
// import BitcoinCashImg from '@/assets/img/currency/bitcoincash.svg';
// import CardanoImg from '@/assets/img/currency/cardano.svg';
// import ChainLinkImg from '@/assets/img/currency/chainlink.svg';
import CosmosImg from '@/assets/img/currency/cosmos.png';
import DashImg from '@/assets/img/currency/dash.svg';
import DogecoinImg from '@/assets/img/currency/dogecoin.svg';
// import EtcImg from '@/assets/img/currency/etc.svg';
import EthereumImg from '@/assets/img/currency/ethereum.svg';
// import ExchangeImg from '@/assets/img/currency/exchange.svg';
import LitecoinImg from '@/assets/img/currency/litecoin.svg';
// import MoneroImg from '@/assets/img/currency/monero.svg';
// import NemImg from '@/assets/img/currency/nem.svg';
// import NeoImg from '@/assets/img/currency/neo.svg';
// import PayeerImg from '@/assets/img/currency/payeer.svg';
import RippleImg from '@/assets/img/currency/ripple.svg';
import PolygonImg from '@/assets/img/currency/polygon.jpg';
// import SberbankImg from '@/assets/img/currency/sberbank.svg';
import SolanaImg from '@/assets/img/currency/solana.jpg';
import StellarImg from '@/assets/img/currency/stellar.svg';
// import TetherImg from '@/assets/img/currency/tether.svg';
import TetherTRC20Img from '@/assets/img/currency/tethertrc20.svg';
// import TinkoffImg from '@/assets/img/currency/tinkoff.svg';
import TronImg from '@/assets/img/currency/tron.svg';
// import VisaMasterCardImg from '@/assets/img/currency/visamastercard.svg';
// import VtbImg from '@/assets/img/currency/vtb.svg';
import WavesImg from '@/assets/img/currency/waves.jpg';
import { CurrencyUnitEnum } from '@/types/exchange';
// import ZCashImg from '@/assets/img/currency/zcash.svg';

export interface CurrencyDataItemWithWallet {
  img: string;
  title: string;
  wallet: string;
  shortName: CurrencyUnitEnum;
  courseToUsd: number;
  onlyMoney?: boolean
}

export const CURRENCY_LIST: CurrencyDataItemWithWallet[] = [
  {
    img: BitcoinImg,
    title: 'Bitcoin BTC',
    wallet: 'bc1qr7fw4x2dt4lp3gjh427njfq2l8vcw5420sc08h',
    shortName: CurrencyUnitEnum.BTC,
    courseToUsd: 1,
  },
  {
    img: EthereumImg,
    title: 'Ethereum(ERC20)',
    wallet: '0x5B4a943Ad1A9C59cB00DB5Eac15f2f1b684EfA29',
    shortName: CurrencyUnitEnum.ETH,
    courseToUsd: 1,
  },
  {
    img: RippleImg,
    title: 'Ripple',
    wallet: 'rNNxf7j7HVhhdnkMDERsq9TNhhgSSpfakS',
    shortName: CurrencyUnitEnum.XRP,
    courseToUsd: 1,
  },
  {
    img: BinanceImg,
    title: 'Binance Chain',
    wallet: 'bnb17wt70r4clut6xle4my7l8q90ae2yd7efckkw3p',
    shortName: CurrencyUnitEnum.BNB,
    courseToUsd: 1,
  },
  {
    img: LitecoinImg,
    title: 'Litecoin',
    wallet: 'ltc1ql4me2skxlgn82tmy0v2gn6gt80dphw8hk57q4a',
    shortName: CurrencyUnitEnum.LTC,
    courseToUsd: 1,
  },
  {
    img: PolygonImg,
    title: 'Polygon',
    wallet: '0x5B4a943Ad1A9C59cB00DB5Eac15f2f1b684EfA29',
    shortName: CurrencyUnitEnum.MATIC,
    courseToUsd: 1,
  },
  {
    img: StellarImg,
    title: 'Stellar lumens',
    wallet: 'GD4AUYERLCQMJRWDO3S2BZAKLA2NGAVKDTRKQQPZXM77SMDV4HBI3OIZ',
    shortName: CurrencyUnitEnum.XLM,
    courseToUsd: 1,
  },
  {
    img: TronImg,
    title: 'Tron (TRC20)',
    wallet: 'TNjYBmHTUXPVapnATtiwFDiuHgZczyH5Nz',
    shortName: CurrencyUnitEnum.TRX,
    courseToUsd: 1,
  },
  {
    img: CosmosImg,
    title: 'Cosmos',
    wallet: 'cosmos1kzz8vzue5tvnt07v5yz57606kutju6mjfctmjt',
    shortName: CurrencyUnitEnum.ATOM,
    courseToUsd: 1,
  },
  {
    img: DashImg,
    title: 'Dash',
    wallet: 'Xm4Z6CyDW9tK6g11XpLCNMfVdQWdgVLBsf',
    shortName: CurrencyUnitEnum.DASH,
    courseToUsd: 1,
  },

  {
    img: DogecoinImg,
    title: 'Dogecoin',
    wallet: 'DKvKLoD8kwSBX5JPmQ7sjBgqUScppBKKNP',
    shortName: CurrencyUnitEnum.DOG,
    courseToUsd: 1,
  },
  {
    img: WavesImg,
    title: 'Waves',
    wallet: '3PNYAhpEUqj58L1P7Zj5fkU9UAd3yPjNyYx',
    shortName: CurrencyUnitEnum.WAVES,
    courseToUsd: 1,
  },
  {
    img: SolanaImg,
    title: 'Solana',
    wallet: '7Hn42XExQ9WJtnQfkttJFx1SjhuqFrNccMpBuwkoHF77',
    shortName: CurrencyUnitEnum.SOL,
    courseToUsd: 1,
  },
  {
    img: TetherTRC20Img,
    title: 'USDT (Tether)',
    wallet: 'TNjYBmHTUXPVapnATtiwFDiuHgZczyH5Nz',
    shortName: CurrencyUnitEnum.USDT,
    courseToUsd: 1,
  },
  {
    img: TetherTRC20Img,
    title: 'Sberbank RUB',
    wallet: 'RUB',
    shortName: CurrencyUnitEnum.RUB,
    courseToUsd: 1,
  },
];
