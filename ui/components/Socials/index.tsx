import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';
import soundclound from '../../../public/icons/soundcloud_social.svg';
import telegram from '../../../public/icons/tg_social.svg';
import instagram from '../../../public/icons/insta_social.svg';
import vk from '../../../public/icons/vk_social.svg';

const Socials: React.FC = () => {
  return (
    <ul className={styles.socials}>
      <li className={styles.socials__item}>
        <Link href="https://soundcloud.com/tmrkt">
          <a>
            <img src={soundclound} alt="Ссылка на профиль в Саундклауд" />
          </a>
        </Link>
      </li>
      <li className={styles.socials__item}>
        <Link href="https://t.me/tmrktg">
          <a>
            <img src={telegram} alt="Ссылка на Телеграм канал" />
          </a>
        </Link>
      </li>
      <li className={styles.socials__item}>
        <Link href="https://www.instagram.com/tmrktig/">
          <a>
            <img src={instagram} alt="Ссылка на профиль в Инстаграм" />
          </a>
        </Link>
      </li>
      <li className={styles.socials__item}>
        <Link href="https://vk.com/tmrkt">
          <a>
            <img src={vk} alt="Ссылка на группу ВКонтакте" />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
