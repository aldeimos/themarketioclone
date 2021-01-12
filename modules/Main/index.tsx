import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getManNewestProducts, getWomenNewestProducts } from '../../store/actions/product';
import Blog from '../../ui/components/Blog';
import Footer from '../../ui/components/Footer';
import Header from '../../ui/components/Header';
import NewestItems from '../../ui/components/NewestItems';
import Spinner from '../../ui/components/Spinner';
import VkCommunityWidget from '../../ui/components/VkCommunityWidget';
import PageContentTemplate from '../PageContentTemplate';
import styles from './index.module.scss';

const Main: React.FC = () => {
  const [isInit, setIsInit] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await Promise.all([getWomenNewestProducts()(dispatch), getManNewestProducts()(dispatch)]);
      setIsInit(true);
    })();
  }, [dispatch]); // this is not good, but themarket api has JWT token stored in localStorage on the client

  // TODO check if its useless re-renders

  const itemsContent = isInit ? (
    <>
      <NewestItems title="Новое в мужском" genderType="men" ownStyles={styles.main__indent} />
      <NewestItems title="Новое в женском" genderType="women" />
    </>
  ) : (
    <Spinner />
  );

  return (
    <>
      <Header />
      <PageContentTemplate>
        <div className={styles.main__leftColumn}>{itemsContent}</div>
        <div className={styles.main__rightColumn}>
          <div className={styles.main__blog}>
            <Blog />
          </div>
          <VkCommunityWidget />
        </div>
      </PageContentTemplate>
      <Footer />
    </>
  );
};

export default Main;
