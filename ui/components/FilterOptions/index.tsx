import React from 'react';
import { useSelector } from 'react-redux';

import protectedIcon from '../../../public/icons/protected_shield.svg';
import { getMenCategories, getWomenCategories } from '../../../store/selectors/sexCategory';
import Checkbox from '../Checkbox';
import Dropdown from '../Dropdown';
import InputNumber from '../InputNumber';
import styles from './index.module.scss';

const FilterOptions: React.FC = () => {
  const menCategories = useSelector((state: any) => getMenCategories(state));
  const womenCategories = useSelector((state: any) => getWomenCategories(state));

  const handleFormData = () => {};

  const categories = menCategories.categories.map((cat) => (
    <Dropdown
      key={cat.id}
      title={cat.translations.ru}
      list={cat.concreteCategories}
      onChange={handleFormData}
    />
  ));

  return (
    <div className={styles.filterOptions}>
      <div className={styles.filterOptions__sex}>
        <button className={`${styles.filterOptions__sexBtn} ${styles.active}`}>
          <span>Мужской</span>
        </button>
        <button className={styles.filterOptions__sexBtn}>
          <span>Женский</span>
        </button>
      </div>
      <div className={styles.filterOptions__categories}>
        <span className={styles.filterOptions__subtitle}>Категория</span>
        {categories}
      </div>
      <div className={styles.filterOptions__price}>
        <span className={styles.filterOptions__subtitle}>Цена, руб.</span>
        <div className={styles.filterOptions__priceWrapper}>
          <InputNumber value={'0'} prefix="от" onChange={() => ''} />
          <InputNumber value={'50000'} prefix="до" onChange={() => ''} />
        </div>
      </div>
      <div className={styles.filterOptions__protected}>
        <Checkbox
          text="Безопасная сделка"
          icon={<img src={protectedIcon} alt="Зеленый щит" />}
          onChange={() => ''}
        />
      </div>
      <div className={styles.filterOptions__exchange}>
        <Checkbox text="Обмен" onChange={() => ''} />
      </div>
    </div>
  );
};

export default FilterOptions;
