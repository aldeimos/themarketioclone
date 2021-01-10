import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import likedIcon from '../../public/icons/liked.svg';
import unlikedIcon from '../../public/icons/unliked.svg';
import { getRelativeTime } from '../../services/utils';
import { manageProductLikeMark } from '../../store/actions/product';
import { getEntity } from '../../store/selectors/abstract';
import ProductSlider from '../ProductSlider';
import styles from './index.module.scss';

interface ProductCardProps {
  itemId: string;
  user: { id: string } | null;
  setAuthModal: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ itemId, user, setAuthModal }) => {
  const dispatch = useDispatch();
  const productCard = useSelector((state: any) =>
    getEntity(state, { entityName: 'product', itemId })
  );

  const {
    id,
    images,
    availableSearchIndexBumps,
    escrowAllowed,
    addedAt,
    brand,
    model,
    size: { pretty },
    price,
    highlightedUntil,
    prettyPath,
    likesCount,
    isLiked
  } = productCard;

  const isProtectedDeal = escrowAllowed ? <div className={styles.product__protected} /> : null;
  const isBoosted = availableSearchIndexBumps ? <div className={styles.product__boosted} /> : null;

  const handleLikeStatus = async (e) => {
    e.preventDefault();

    if (!user || !Object.keys(user).length) {
      return setAuthModal();
    }

    if (!isLiked) {
      return await manageProductLikeMark(id, 'POST', true)(dispatch);
    }

    return await manageProductLikeMark(id, 'DELETE', false)(dispatch);
  };

  return (
    <div>
      <Link href={`/items/${prettyPath}`}>
        <a className={styles.product__wrapper}>
          <div className={styles.product__slider}>
            <ProductSlider photos={images} imgResolution="455" />
            <button className={styles.product__likeBtn} onClick={handleLikeStatus}>
              <img
                src={!isLiked ? unlikedIcon : likedIcon}
                alt="Поставить отметку 'Мне нравится'"
              />
              <span>{likesCount}</span>
            </button>
          </div>
          <div className={styles.product__statuses}>
            {isProtectedDeal}
            {isBoosted}
            <time className={styles.product__date} dateTime={addedAt}>
              {getRelativeTime(addedAt)}
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
