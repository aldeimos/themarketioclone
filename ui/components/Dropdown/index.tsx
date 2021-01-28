import React, { useState } from 'react';

import dropdownArrow from '../../../public/icons/dropdown_arrow.svg';
import Checkbox from '../Checkbox';
import styles from './index.module.scss';

interface DropdownProps {
  title: string;
  list: any[];
  onChange: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, list, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const subCategories = list.map((cat) => {
    const {
      id,
      translations: { ru }
    } = cat;
    return (
      <div key={id} className={styles.dropdown__item}>
        <Checkbox text={ru[0].toUpperCase() + ru.slice(1)} onChange={onChange} />
      </div>
    );
  });

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__title} onClick={handleOpenDropdown}>
        <img className={`${isOpen ? styles.dropdown__opened : ''}`} src={dropdownArrow} alt="" />
        {title[0].toUpperCase() + title.slice(1)}
      </div>
      {isOpen && <div className={styles.dropdown__list}>{subCategories}</div>}
    </div>
  );
};

export default Dropdown;
