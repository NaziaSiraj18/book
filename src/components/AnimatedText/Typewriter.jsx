import React, { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = ({ text, speed = 100, delay = 0, className, ...props }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentIndex === 0) {
        // Pause before starting to type again
        setTimeout(() => setIsDeleting(false), 500);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed]);

  return (
    <span className={`${styles.typewriter} ${className || ''}`} {...props}>
      {currentText}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default Typewriter;