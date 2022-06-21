import React from 'react';
import styles from 'styles/Auth.module.css';

export default function index(props) {
  return (
    <div className={styles.right}>
      <div className={styles.right_heading}>
        <h2 className={styles.right_title}>{props.greeting}</h2>
        <p className={styles.right_subtitle}>{props.subtitle}</p>
      </div>
      {props.children}
    </div>
  );
}
