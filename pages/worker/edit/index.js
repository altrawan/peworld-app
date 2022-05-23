import React from 'react';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import Image from '../../../components/Image';
import Button from '../../../components/Button';
import styles from '../../../styles/Worker.module.css';
import PurpleBackground from '../../../components/PurpleBackground';
import UserInfo from '../../../components/UserInfo';
import FormInput from '../../../components/FormInput';

const index = () => {
  return (
    <>
      <Header title="Edit Profile Page" />

      <section className={`${styles.edit__profile} mb-0 position-relative`}>
        <PurpleBackground className={styles.edit__decoration} />
        <div className="container">
          <div className={`row ${styles.card__padding}`}>
            <div className="col-12 col-md-4 col-lg-4">
              <Card className={styles.card__profile}>
                <div
                  className={`${styles.card__image} d-flex flex-column justify-content-center align-items-center`}
                >
                  <Image
                    srcImage="/images/user-3.png"
                    altImage="Profile Image"
                    imageClass="img-cover rounded-circle"
                    imageWidth={120}
                    imageHeight={120}
                  />
                  <Button className={`btn ${styles.btn__edit} p-0`}>
                    <input
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      id="file"
                      name="photo"
                      style={{ display: 'none' }}
                    />
                    Edit
                  </Button>
                </div>

                <UserInfo
                  className={styles.user__data}
                  title="Louis Tomlinson"
                  jobs={
                    <>
                      <div className={`${styles.job__info} mb-3`}>
                        <span className={`${styles.job__title} mb-1`}>
                          Web Developer
                        </span>
                      </div>
                      <div className="d-flex" style={{ gap: '10px' }}>
                        <Image
                          srcImage="/icons/icon-location.svg"
                          altImage="Profile Image"
                          imageClass={styles.icon}
                          imageWidth={20}
                          imageHeight={20}
                        />
                        Purwokerto, Jawa Tengah
                      </div>
                      <span className={styles.text_gray}>Freelancer</span>
                    </>
                  }
                />
              </Card>
              <div
                className="d-flex flex-column"
                style={{ marginBottom: '50px' }}
              >
                <Button className={`btn ${styles.btn__main}`}>Simpan</Button>
                <Button className={`btn ${styles.btn__back}`}>Batal</Button>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <Card className={styles.card__profile}>
                <div className={styles.content__title}>
                  <h5 className={styles.content__heading}>Data diri</h5>
                </div>

                <div className={`${styles.line} w-100`} />

                <div className={styles.content__form}>
                  <div className="form-group position-relative">
                    <label htmlFor="fullname">Nama Lengkap</label>
                    <FormInput
                      placeholder="Masukan nama lengkap"
                      name="name"
                      id="fullname"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label htmlFor="fullname">Job Desk</label>
                    <FormInput
                      placeholder="Masukan job desk"
                      name="name"
                      id="fullname"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

index.layout = 'mainLayout';

export default index;
