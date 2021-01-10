import React from 'react';

import { SexCategory } from '../../store/types';
import MenuLink from '../MenuLink';
import styles from './index.module.scss';

interface SexCategoriesWrapperProps {
  category: SexCategory;
}

const SexCategoriesWrapper: React.FC<SexCategoriesWrapperProps> = ({ category }) => {
  const { categories } = category;

  const renderedCategories = categories.map((category) => {
    const {
      translations: { ru }
    } = category;

    return (
      <div key={category.id} className={styles.categoriesOverlay__column}>
        <MenuLink linkHref={category.relativeUrl}>{ru[0].toUpperCase() + ru.slice(1)}</MenuLink>
        <div>
          {category.concreteCategories.map((subCategory) => {
            const {
              translations: { ru }
            } = subCategory;
            return (
              <MenuLink key={subCategory.id} linkHref={subCategory.relativeUrl}>
                {ru[0].toUpperCase() + ru.slice(1)}
              </MenuLink>
            );
          })}
        </div>
      </div>
    );
  });
  return <div className={styles.categoriesOverlay}>{renderedCategories}</div>;
};

export default SexCategoriesWrapper;
