import React from 'react';
import PurpleBackground from '../PurpleBackground';
import styles from '../../../styles/Home.module.css';

export default function index() {
  return (
    <PurpleBackground className="sticky-top">
      <div className="container">
        <div className={styles.topjob__content}>
          <h3 className={styles.topjob__title}>Top Jobs</h3>
        </div>
      </div>
    </PurpleBackground>
  );
}
