import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import nav_arrow from '../../../public/icons/nav_arrow_right.svg';
import { getEntitiesIdsByGender } from '../../../store/selectors/product';
import ProductCard from '../ProductCard';
import styles from './index.module.scss';

interface NewestItemsProps {
  title: string;
  genderType: string;
  ownStyles?: string;
}

const NewestItems: React.FC<NewestItemsProps> = ({ title, genderType, ownStyles = '' }) => {
  const entityIds = useSelector((state: any) => getEntitiesIdsByGender(state, { genderType }));

  const renderedProducts = entityIds
    .slice(0, 6)
    .map((itemId) => <ProductCard key={itemId} itemId={itemId} />);

  return (
    <div>
      <div className={`${styles.newestItems__wrapper} ${ownStyles}`}>
        <Link href={`/search?sex=${genderType}`}>
          <a className={styles.newestItems__subtitle}>{title}</a>
        </Link>
        <div className={styles.newestItems__content}>{renderedProducts}</div>
        <Link href={`/search?sex=${genderType}`}>
          <a className={styles.newestItems__showMore}>
            Показать всё
            <img className={styles.newestItems__navArrow} src={nav_arrow} alt="Иконка указателя" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewestItems;
