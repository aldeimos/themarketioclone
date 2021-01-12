import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import vkLogo from '../../../public/icons/vk_social.svg';
import { sendAuthCode } from '../../../services/api/api';
import { getAuthToken } from '../../../store/actions/user';
import Button from '../Button';
import styles from './index.module.scss';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [step, setStep] = useState<number>(0);

  const handleSendCode = async () => {
    await sendAuthCode(email);
    setStep(1);
  };

  const handleLogin = async () => {
    await getAuthToken(code, email)(dispatch);
    onClose();
  };

  const steps = {
    0: (
      <div className={styles.authModal}>
        <span className={styles.authModal__subtitle}>Вход</span>
        <label htmlFor="email" className={styles.authModal__label}>
          Почта
          <input
            className={styles.authModal__input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className={styles.authModal__loginBtn}>
          <Button onClick={handleSendCode} disabled={!email.length}>
            Войти
          </Button>
        </div>
        <div className={styles.authModal__subtext}>или войдите с помощью:</div>
        <Button template="vkLogin" onClick={handleSendCode}>
          <img src={vkLogo} alt="Иконка социальной сети ВКонтакте" />
          Продолжить
        </Button>
      </div>
    ),
    1: (
      <div className={`${styles.authModal} ${styles.authModal_step2}`}>
        <span className={`${styles.authModal__subtitle} ${styles.authModal__subtitle_step2}`}>
          Проверьте свою почту
        </span>
        <p className={styles.authModal__text}>
          Мы отправили шестизначный код подтверждения на {email}. Введите его, чтобы подтвердить
          вашу электронную почту.
        </p>
        <label htmlFor="number" className={styles.authModal__label}>
          Код
          <input
            className={styles.authModal__input}
            type="number"
            id="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <div className={styles.authModal__sendAgain}>
          <Button template="linkLike" onClick={handleSendCode}>
            Отправить еще
          </Button>
        </div>
        <div className={styles.authModal__sendCodeBtn}>
          <Button onClick={handleLogin}>Продолжить</Button>
        </div>
        <Button template="stepBack" onClick={() => setStep(0)}>
          Назад
        </Button>
      </div>
    )
  };

  return steps[step];
};

export default AuthModal;
