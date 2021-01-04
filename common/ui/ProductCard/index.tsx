import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { getEntity } from '../../../store/selectors/abstract';
import ProductSlider from '../ProductSlider';
import styles from './index.module.scss';

interface ProductCardProps {
  itemId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ itemId }) => {
  const entity = useSelector((state: any) => getEntity(state, { entityName: 'product', itemId }));
  const {
    images,
    availableSearchIndexBumps,
    escrowAllowed,
    addedAt,
    brand,
    model,
    size: { pretty },
    price,
    highlightedUntil
  } = entity;

  const isProtectedDeal = escrowAllowed ? <div className={styles.product__protected} /> : null;
  const isBoosted = availableSearchIndexBumps ? <div className={styles.product__boosted} /> : null;

  console.log(entity);

  return (
    <div>
      <Link href="/">
        <a className={styles.product__wrapper}>
          <div className={styles.product__slider}>
            <ProductSlider photos={images} imgResolution="455" />
          </div>
          <div className={styles.product__statuses}>
            {isProtectedDeal}
            {isBoosted}
            <time className={styles.product__date} dateTime={addedAt}>
              {addedAt}
            </time>
          </div>
          <div>
            <h3 className={styles.product__brand}>{brand}</h3>
            <p className={styles.product__model}>{model}</p>
            <p className={styles.product__size}>{pretty}</p>
            <p
              className={`${styles.product__price} ${
                highlightedUntil ? styles.product__price_highlighted : ''
              }`}>
              {price} руб.
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
