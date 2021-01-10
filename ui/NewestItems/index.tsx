import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import nav_arrow from '../../public/icons/nav_arrow_right.svg';
import { AuthContext } from '../../services/context/AuthContext';
import { getEntitiesIdsByGender } from '../../store/selectors/product';
import AuthModal from '../AuthModal';
import MenuLink from '../MenuLink';
import Modal from '../ModalWrapper';
import ProductCard from '../ProductCard';
import styles from './index.module.scss';

interface NewestItemsProps {
  title: string;
  genderType: string;
  ownStyles?: string;
}

const NewestItems: React.FC<NewestItemsProps> = ({ title, genderType, ownStyles = '' }) => {
  const [authModal, setAuthModal] = useState<boolean>(false);
  const { user } = useContext(AuthContext);
  const entityIds = useSelector((state: any) => getEntitiesIdsByGender(state, { genderType }));

  const renderedProducts = entityIds
    .slice(0, 6)
    .map((itemId) => (
      <ProductCard
        key={itemId}
        itemId={itemId}
        user={user}
        setAuthModal={() => setAuthModal(true)}
      />
    ));

  return (
    <div>
      <div className={`${styles.newestItems__wrapper} ${ownStyles}`}>
        <Link href={`/search?sex=${genderType}`}>
          <a className={styles.newestItems__subtitle}>{title}</a>
        </Link>
        <div className={styles.newestItems__content}>{renderedProducts}</div>
        <MenuLink linkHref={`/search?sex=${genderType}`} template="showMore">
          Показать всё
          <img src={nav_arrow} alt="Иконка указателя" />
        </MenuLink>
      </div>
      {authModal && (
        <Modal onClose={() => setAuthModal(false)}>
          <AuthModal onClose={() => setAuthModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default NewestItems;
