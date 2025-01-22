import React, { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, variant = 'primary' }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles['primary']]: variant === 'primary',
        [styles['secondary']]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
};
