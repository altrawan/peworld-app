import React from 'react';
import Image from '../Image';
import styles from '../../styles/Home.module.css';

export default function index() {
  return (
    <section className={styles.skill}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 p-md-0">
            <div className={styles.skill__wrapper}>
              <div className={styles.skill__content}>
                <h2 className={styles.skill__title}>Skill Tallent</h2>
                <p className={styles.skill__subtitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>

                <div className={styles.skill__container}>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>Java</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>Golang</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>Kotlin</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>C++</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>PHP</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>Ruby</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>Javascript</span>
                  </div>
                  <div className={styles.skill__list}>
                    <div className={`${styles.skill__check} rounded-circle`}>
                      <img
                        src="/icons/icon-check.svg"
                        alt=""
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill__name}>
                      10+ Bahasa lainnya
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 p-md-0">
            <div className={styles.skill__right}>
              <Image
                srcImage="/images/skill.png"
                altImage="Peworld Hire"
                className={`${styles.skill__image} mx-auto mx-md-0`}
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
