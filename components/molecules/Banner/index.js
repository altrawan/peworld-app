import React from 'react';
import styles from '../../../styles/Auth.module.css';

export default function index() {
  return (
    <div className={`${styles.banner} d-none d-md-block`}>
      <div className={styles.banner__overlay}>
        <div className={styles.banner__content}>
          <img
            src="/images/logo-white.svg"
            alt="Peworld Hire"
            className={`${styles.brand__logo} img-cover`}
          />
          <div className={styles.banner__text}>
            <h1 className={styles.banner__heading}>
              Temukan developer berbakat &amp; terbaik di berbagai bidang
              keahlian
            </h1>
          </div>
        </div>
        <div className={styles.left__wave}>
          <img
            src="/icons/icon-wave-left.svg"
            alt="Icon"
            className="img-cover"
          />
        </div>
        <div className={styles.right__wave}>
          <img
            src="/icons/icon-wave-right.svg"
            alt="Icon"
            className="img-cover"
          />
        </div>
      </div>
      <img
        src="/images/banner.png"
        alt="Peworld Hire"
        className={`${styles.banner__background} img-cover`}
      />
    </div>
  );
}
