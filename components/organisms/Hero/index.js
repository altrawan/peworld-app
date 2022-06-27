import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/components/Hero.module.css';
import { Hero } from 'assets';

export default function index() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.hero_left}>
              <div className={styles.hero_wrapper}>
                <h1 className={styles.hero_title}>
                  Find the best talent programmer across a wide range of skill
                </h1>
                <p className={styles.hero_subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <Link href="/auth/register">
                  <button className={`btn ${styles.hero_button}`}>
                    Get started now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div>
              <Image
                src={Hero}
                alt="Peworld Hire"
                className={`${styles.hero_image} mx-auto mx-md-0 img-cover`}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
