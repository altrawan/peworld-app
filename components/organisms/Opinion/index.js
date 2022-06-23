/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
import { Instagram } from 'react-content-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styles from 'styles/components/Opinion.module.css';
import { API_URL } from 'helpers/env';

const index = ({ data }) => {
  return (
    <>
      <div className={styles.opinion}>
        <div className="container">
          <h1 className={styles.opinion_title}>Their opinion about peworld</h1>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            loopFillGroupWithBlank
            navigation
            modules={[Navigation]}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {!data.length ? (
              <Instagram />
            ) : (
              data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.opinion_card}>
                    <div className={styles.opinion_image}>
                      <img
                        src={`${
                          item.image
                            ? `${API_URL}uploads/opinion/${item.image}`
                            : `${API_URL}uploads/opinion/default.png`
                        }`}
                        alt={item.name}
                        width={120}
                        height={120}
                      />
                    </div>
                    <h5>{item.name}</h5>
                    <p className={styles.opinion_job}>{item.job}</p>
                    <p className={styles.opinion_desc}>{item.description}</p>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default index;
