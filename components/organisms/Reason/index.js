import React from 'react';
import styles from '../../../styles/Style.module.css';
import Image from '../../atoms/Image';

export default function index() {
  return (
    <section className={styles.reason}>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason__left}>
              <Image
                srcImage="/images/reason.png"
                altImage="Peworld Hire"
                className={`${styles.reason__image} mx-auto mx-md-0`}
                imageClass="img-cover"
                imageWidth={500}
                imageHeight={400}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason__right}>
              <div className={styles.reason__wrapper}>
                <div className={styles.reason_content}>
                  <h2 className={styles.reason_title}>
                    Kenapa harus mencari tallent di peworld
                  </h2>

                  <div className={styles.reason__list}>
                    <div className={styles.list}>
                      <div className={`${styles.check} rounded-circle`}>
                        <img
                          src="/icons/icon-check.svg"
                          alt=""
                          width="10"
                          height="10"
                        />
                      </div>
                      <span className={styles.text}>
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                    <div className={styles.list}>
                      <div className={`${styles.check} rounded-circle`}>
                        <img
                          src="/icons/icon-check.svg"
                          alt=""
                          width="10"
                          height="10"
                        />
                      </div>
                      <span className={styles.text}>
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                    <div className={styles.list}>
                      <div className={`${styles.check} rounded-circle`}>
                        <img
                          src="/icons/icon-check.svg"
                          alt=""
                          width="10"
                          height="10"
                        />
                      </div>
                      <span className={styles.text}>
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                    <div className={styles.list}>
                      <div className={`${styles.check} rounded-circle`}>
                        <img
                          src="/icons/icon-check.svg"
                          alt=""
                          width="10"
                          height="10"
                        />
                      </div>
                      <span className={styles.text}>
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
