import React from 'react';
import clsx from 'clsx';
import styles from './RainbowText.module.css';

const RainbowText = ({ children, className, speed = 'slow', ...props }) => {
  return (
    <span 
      className={clsx(
        styles.rainbowText,
        className,
        styles[`rainbowSpeed${speed.charAt(0).toUpperCase() + speed.slice(1)}`]
      )} 
      {...props}
    >
      {children}
    </span>
  );
};

export default RainbowText;