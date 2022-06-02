import React from 'react';
import Link from 'next/link';
import Image from '../../atoms/Image';
import styles from '../../../styles/Style.module.css';

export default function index() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.hero__left}>
              <div className={styles.hero__wrapper}>
                <h1 className={styles.hero__title}>
                  Talenta terbaik negeri untuk perubahan revolusi 4.0
                </h1>
                <p className={styles.hero__subtitle}>
                  Mari bergabung dengan kami untuk merekrut calon karyawan di
                  perusahaan anda dengan standar perusahaan
                </p>
                <Link href="/auth/register">
                  <button className={`btn ${styles.btn__started}`}>
                    Mulai Dari Sekarang
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div>
              <Image
                srcImage="/images/hero.png"
                altImage="Peworld Hire"
                className={`${styles.hero__image} mx-auto mx-md-0`}
                imageClass="img-cover"
                imageWidth={500}
                imageHeight={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
