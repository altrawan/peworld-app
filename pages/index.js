import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Reason from '../components/Reason';
import Skill from '../components/Skill';
import Opinion from '../components/Opinion';
import Subscribe from '../components/Subscribe';

const index = () => {
  return (
    <>
      <Header title="Landing Page" />

      <Hero />
      <Reason />
      <Skill />
      <Opinion />
      <Subscribe />

      {/* <div className="container">
        <section>
          <div className={`row ${styles.hero}`}>
            <div
              className={`col-12 col-md-6 align-self-center ${styles.hero_container} mb-5`}
            >
              <h1 className="open-sans-600">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h1>
              <p className="open-sans-400">
                Mari bergabung dengan kami untuk merekrut calon karyawan di
                perusahaan anda dengan standar perusahaan dan bagi calon
                perkerja lebih mudah dalam mencari pekerjaan
              </p>
              <button type="button" className="btn btn-primary open-sans-700">
                Mulai Dari Sekarang
              </button>
            </div>
            <div className={`col-12 col-md-6 ${styles.hero_img}`}>
              <img src="/images/hero.png" alt="Peworld Hire" />
            </div>
          </div>
        </section>

        <section>
          <div className={`row ${styles.suggestion}`}>
            <div
              className={`col-12 col-md-6 order-2 order-md-1 ${styles.suggestion_image} mb-5`}
            >
              <img src="/images/suggestion.png" alt="Peworld Hire" />
            </div>
            <div
              className={`col-12 col-md-6 order-1 order-md-2 align-self-center ${styles.suggestion_container} mb-5`}
            >
              <h1 className="open-sans-600">
                Kenapa harus mencari tallent di peworld
              </h1>
              <div className="open-sans-400 d-flex flex-column">
                <span className="mb-4">
                  <img
                    src="/icons/checklist-purple.png"
                    alt="checklist"
                    width="24px"
                    className="me-4"
                  />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span className="mb-4">
                  <img
                    src="/icons/checklist-purple.png"
                    alt="checklist"
                    width="24px"
                    className="me-4"
                  />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span className="mb-4">
                  <img
                    src="/icons/checklist-purple.png"
                    alt="checklist"
                    width="24px"
                    className="me-4"
                  />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
                <span className="mb-4">
                  <img
                    src="/icons/checklist-purple.png"
                    alt="checklist"
                    width="24px"
                    className="me-4"
                  />
                  <span>Lorem ipsum dolor sit amet.</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`row ${styles.skill}`}>
            <div
              className={`col-12 col-md-6 align-self-center ${styles.skill} mb-5`}
            >
              <h1 className="open-sans-600">Skill Tallent</h1>
              <p className="open-sans-400 mt-4 mb-5">
                Berbagai skill dan kemampuan yang anda bisa temukan disini
              </p>
              <div className="row">
                <div className="col-6 d-flex flex-column">
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>Java</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>Kotlin</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>PHP</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>Javascript</span>
                  </span>
                </div>
                <div className="col-6 d-flex flex-column">
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>Golang</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>C++</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>Ruby</span>
                  </span>
                  <span className="mb-4">
                    <img
                      src="/icons/checklist-yellow.png"
                      alt="checklist"
                      width="24px"
                      className="me-4"
                    />
                    <span>10+ Bahasa lainnya</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={`col-12 col-md-6 ${styles.skill_image}`}>
              <img src="/images/skill.png" alt="Peworld Hire" />
            </div>
          </div>
        </section>
      </div>
      <Card />

      <div className="container d-none d-md-block">
        <div className={styles.join}>
          <div className={styles.join_bg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className={styles.join_svg}
            >
              <path
                fill="#6659a6"
                fillOpacity="1"
                d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>

            <div
              className={`d-flex justify-content-between ${styles.join_content}`}
            >
              <div>
                <p className="open-sans-600">Mulai perjalan anda sekaran di</p>
                <p className="open-sans-600">Peworld Hire</p>
              </div>
              <button
                type="button"
                className="btn btn-primary open-sans-700 align-self-center"
              >
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

index.layout = 'mainLayout';

export default index;
