/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type ExchangeRateItem = {
  time: string,
  asset_id_quote: string;
  rate: number
}

type ExchangeRateContextType = {
  asset_id_base: string,
  rates: Array<ExchangeRateItem>
}

const ModalContext = React.createContext<ExchangeRateContextType>({
  asset_id_base: 'USD',
  rates: [],
});

export default ModalContext;
