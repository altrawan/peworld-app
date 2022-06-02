import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Style.module.css';
import Card from '../../atoms/Card';

export default function index() {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <Card className={styles.subscribe__card}>
          <div className={styles.subscribe__content}>
            <h2 className={styles.subscribe__text}>
              Ayo <span>Daftar Sekarang</span>
            </h2>
            <Link href="/auth/register">
              <button className={`btn ${styles.btn__started_white}`}>
                Mulai Dari Sekarang
              </button>
            </Link>
          </div>
          <div className={styles.wave}>
            <img src="/images/wave.svg" alt="" className="img-cover" />
          </div>
        </Card>
      </div>
    </section>
  );
}
