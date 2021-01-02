import './app.scss';
import 'normalize.css';

import React from 'react';

import { wrapper } from '../store';

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);