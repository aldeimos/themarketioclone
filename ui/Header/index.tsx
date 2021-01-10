import React, { useState } from 'react';

import logo from '../../public/icons/logo_header.svg';
import AuthModal from '../AuthModal';
import InputSearch from '../InputSearch';
import Modal from '../ModalWrapper';
import Navigation from '../Navigation';
import styles from './index.module.scss';

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <header className={`header ${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__wrapper}>
          <img src={logo} alt="Лого" width={80} height={12} />
          <div className={styles.header__search}>
            <InputSearch />
          </div>
          <div className={styles.header__nav}>
            <Navigation onOpen={() => setModal(true)} />
          </div>
        </div>
      </div>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <AuthModal onClose={() => setModal(false)} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
