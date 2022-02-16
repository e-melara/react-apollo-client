import React from 'react';

import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export const ExchangeRates = () => {
  const { loading, data } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <span>Loading ....</span>;
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency} : {rate}
      </p>
    </div>
  ));
};
