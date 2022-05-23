import React from 'react';
import styles from '../../styles/Home.module.css';
import Card from '../Card';
import Button from '../Button';

export default function index() {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <Card className={styles.subscribe__card}>
          <div className={styles.subscribe__content}>
            <h2 className={styles.subscribe__text}>
              Ayo <span>Daftar Sekarang</span>
            </h2>
            <Button className={`btn ${styles.btn__started_white}`}>
              Mulai Dari Sekarang
            </Button>
          </div>
          <div className={styles.wave}>
            <img src="/images/wave.svg" alt="" className="img-cover" />
          </div>
        </Card>
      </div>
    </section>
  );
}
