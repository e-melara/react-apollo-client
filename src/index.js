import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { render } from 'react-dom';

import './index.css';
import App from './App';

import { client } from './apollo.config';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
