import { useRouter } from 'next/router';
import React, { useState } from 'react';

import searchIcon from '../../../public/icons/loop.svg';
import { getSearchUrl } from '../../../services/utils';
import styles from './index.module.scss';

interface InputSearchProps {
  query: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ query }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>(query || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = getSearchUrl();
    const newValue = e.target.value;
    params.set('query', newValue);
    setInputValue(newValue);

    if (router.pathname === '/search') {
      router.replace(`/search?${params.toString()}`);
    }
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter' && router.pathname !== '/search') {
      router.push(`/search?query=${inputValue}`);
    }
  };

  return (
    <label className={styles.inputSearch}>
      <span className={styles.inputSearch__icon}>
        <img src={searchIcon} width={12} height={12} alt="Лупа" />
      </span>
      <input
        className={`${styles.inputSearch__input} input-focused`}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputSubmit}
        placeholder="Поиск"
      />
    </label>
  );
};

export default InputSearch;
