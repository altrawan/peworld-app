import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/Banner.module.css';
import { LogoWhite, WaveLeft, WaveRight, Banner } from 'assets';

export default function index() {
  return (
    <div className="position-relative d-none d-md-block">
      <div className={styles.banner_overlay}>
        <div className={styles.banner_content}>
          <div style={{ width: '25%' }}>
            <Image src={LogoWhite} alt="Peworld Hire" />
          </div>
          <div className={styles.banner_text}>
            <h1 className={styles.banner_heading}>
              Find talented & best developers in various fields of expertise
            </h1>
          </div>
        </div>
        <div className={styles.left_wave}>
          <Image src={WaveLeft} alt="Icon" className="img-cover" />
        </div>
        <div className={styles.right_wave}>
          <Image src={WaveRight} alt="Icon" className="img-cover" />
        </div>
      </div>
      <Image src={Banner} alt="Peworld Hire" />
    </div>
  );
}
