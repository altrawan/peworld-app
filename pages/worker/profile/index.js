import React from 'react';
import Image from 'next/image';
// import { Tabs, Tab } from 'react-bootstrap';
import styles from '../../../styles/Worker.module.css';
import Header from '../../../components/Header';
import PurpleBackground from '../../../components/PurpleBackground';

const index = () => {
  return (
    <>
      <Header title="Profile Page" />

      <section className={styles.profile}>
        <PurpleBackground className="purple" />

        <div className="container">
          <div className="row">
            <div className={styles.profile__user}>
              <div className={styles.profile__image}>
                <Image
                  src="/images/user-1.png"
                  className="rounded-circle"
                  alt="My Name"
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.profile__content}>
                <h2>Harry Styles</h2>
                <h6>Web Developer</h6>
              </div>
              <div className="row">
                <div className="col vector">
                  <Image
                    src="/icons/icon-location.svg"
                    width={25}
                    height={25}
                  />
                  Purwokerto, Jawa Tengah
                </div>
              </div>
              <div className="row">
                <div className="col vector">
                  <Image src="/icons/icon-phone.svg" width={25} height={25} />
                  +62 801-2345-6789
                </div>
              </div>
              <p>Freelancer</p>
            </div>
            <div className="profile__portofolio" />
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'secondaryLayout';

export default index;
