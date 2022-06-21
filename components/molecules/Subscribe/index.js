import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/components/Subscribe.module.css';
import { Card } from 'components';
import { Wave } from 'assets';

export default function index() {
  return (
    <section className={styles.subscribe}>
      <div className="container">
        <Card className={styles.subscribe_card}>
          <div className={styles.subscribe_content}>
            <h2 className={styles.subscribe_text}>
              Lorem ipsum <span>dolor sit amet</span>
            </h2>
            <Link href="/auth/register">
              <button className={`btn ${styles.subscribe_button}`}>
                Mulai Dari Sekarang
              </button>
            </Link>
          </div>
          <div className={styles.subscribe_wave}>
            <Image src={Wave} alt="Wave" className="img-cover" />
          </div>
        </Card>
      </div>
    </section>
  );
}
