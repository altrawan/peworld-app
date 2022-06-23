import React from 'react';
import { PurpleBackground } from 'components';
import styles from 'styles/Home.module.css';

export default function index() {
  return (
    <div style={{ marginTop: '90px' }}>
      <PurpleBackground>
        <div className="container">
          <div className={styles.topjob__content}>
            <h3 className={styles.topjob__title}>Top Jobs</h3>
          </div>
        </div>
      </PurpleBackground>
    </div>
  );
}
