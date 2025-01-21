import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
