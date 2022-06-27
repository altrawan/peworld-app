import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/Reason.module.css';
import { Reason, IconCheck } from 'assets';

export default function index() {
  return (
    <section className={styles.reason}>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason__left}>
              <Image
                src={Reason}
                alt="Peworld Hire"
                className={`${styles.reason__image} mx-auto mx-md-0 img-cover`}
                width={500}
                height={450}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason_right}>
              <h2 className={styles.reason_title}>
                Why should you search for talent on peworld
              </h2>
              <div className="mt-5">
                <div className={styles.reason_list}>
                  <div className={`${styles.reason_check} rounded-circle`}>
                    <Image src={IconCheck} alt="Icon" width={10} height={10} />
                  </div>
                  <span className={styles.reason_text}>
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
                <div className={styles.reason_list}>
                  <div className={`${styles.reason_check} rounded-circle`}>
                    <Image src={IconCheck} alt="Icon" width={10} height={10} />
                  </div>
                  <span className={styles.reason_text}>
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
                <div className={styles.reason_list}>
                  <div className={`${styles.reason_check} rounded-circle`}>
                    <Image src={IconCheck} alt="Icon" width={10} height={10} />
                  </div>
                  <span className={styles.reason_text}>
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
                <div className={styles.reason_list}>
                  <div className={`${styles.reason_check} rounded-circle`}>
                    <Image src={IconCheck} alt="Icon" width={10} height={10} />
                  </div>
                  <span className={styles.reason_text}>
                    Lorem ipsum dolor sit amet.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
