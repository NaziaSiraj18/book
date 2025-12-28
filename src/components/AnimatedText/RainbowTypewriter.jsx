import React from 'react';
import Typewriter from './Typewriter';
import RainbowText from './RainbowText';
import clsx from 'clsx';
import styles from './RainbowTypewriter.module.css';

const RainbowTypewriter = ({ text, speed = 100, className, rainbowSpeed = 'slow', ...props }) => {
  return (
    <RainbowText speed={rainbowSpeed} className={clsx(styles.rainbowTypewriter, className)} {...props}>
      <Typewriter text={text} speed={speed} />
    </RainbowText>
  );
};

export default RainbowTypewriter;