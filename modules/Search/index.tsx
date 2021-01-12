import React from 'react';

import Footer from '../../ui/components/Footer';
import Header from '../../ui/components/Header';
import SearchContainer from '../../ui/pages/SearchContainer';
import styles from '../Main/index.module.scss';
import PageContentTemplate from '../PageContentTemplate';

interface SearchProps {
  query: string;
}

const Search: React.FC<SearchProps> = ({ query }) => {
  return (
    <>
      <Header query={query} />
      <PageContentTemplate>
        <SearchContainer />
      </PageContentTemplate>
      <Footer />
    </>
  );
};

export default Search;
