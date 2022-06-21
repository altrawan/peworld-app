import React from 'react';
import Image from 'next/image';
import styles from 'styles/Auth.module.css';
import { LogoWhite, WaveLeft, WaveRight, Banner } from 'assets';

export default function index() {
  return (
    <div className="position-relative d-none d-md-block">
      {/* <div className="position-relative"> */}
      <div className={styles.banner__overlay}>
        <div className={styles.banner__content}>
          <Image
            src={LogoWhite}
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
          <Image src={WaveLeft} alt="Icon" className="img-cover" />
        </div>
        <div className={styles.right__wave}>
          <Image src={WaveRight} alt="Icon" className="img-cover" />
        </div>
      </div>
      <Image
        src={Banner}
        alt="Peworld Hire"
        className={`${styles.banner__background} img-cover`}
      />
      {/* </div> */}
    </div>
  );
}
