import './app.scss';
import 'normalize.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthContext } from '../services/context/AuthContext';
import { wrapper } from '../store';
import { getUser } from '../store/actions/user';
import { getUser as getUserSelector } from '../store/selectors/user';

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const [isUserLoaded, setIsUserLoaded] = useState<boolean>(false);
  const user = useSelector((state: any) => getUserSelector(state));

  useEffect(() => {
    (async () => {
      await getUser()(dispatch);
      setIsUserLoaded(true);
    })();
  }, [dispatch]);

  return (
    <>
      <AuthContext.Provider value={{ user, isUserLoaded }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
};

export default wrapper.withRedux(App);
