import React from 'react';
import styles from '../../styles/Auth.module.css';

const index = () => {
  return (
    <>
      <div className={styles.banner}>
        <img
          src="/images/mask.png"
          alt="Preworld Hiring"
          className={styles.banner_mask}
        />
        <span className={styles.banner_quote}>
          <img
            src="/images/logo-white.png"
            alt="Preworld Hiring"
            className={styles.banner_logo}
          />
        </span>
        <span className={styles.banner_quote}>
          <h1>
            Temukan developer <br />
            berbakat &amp; terbaik <br />
            di berbagai bidang <br />
            keahlian
          </h1>
        </span>
      </div>
      <img
        src="/images/banner.png"
        alt="Preworld Hiring"
        className={styles.banner_image}
      />
    </>
  );
};

export default index;
