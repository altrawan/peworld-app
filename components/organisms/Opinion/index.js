import React from 'react';
import ContentLoader from 'react-content-loader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../../styles/Style.module.css';
import { API_URL } from '../../../helpers/env';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const index = ({ data }) => {
  return (
    <>
      <div className={styles.testimonial}>
        <div className="container">
          <h1
            className={`${styles.testimonial_title} open-sans-600 text-center`}
          >
            Their opinion about peworld hire
          </h1>
          <Carousel responsive={responsive}>
            {!data.length ? (
              <ContentLoader />
            ) : (
              data.map((item) => (
                <div className={styles.testimonial_card}>
                  <div className="text-center">
                    <img
                      src={`${
                        item.image
                          ? `${API_URL}uploads/opinion/${item.image}`
                          : `${API_URL}uploads/opinion/default.png`
                      }`}
                      alt={item.name}
                      width="120px"
                    />
                    <h5 className="open-sans-600">{item.name}</h5>
                    <p className="mb-3 text-secondary">{item.job}</p>
                    <p className={`${styles.testimonial_desc} open-sans-serif`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* <div className={styles.testimonial_card}>
              <div className="text-center">
                <img src="/images/user-2.png" alt="Niall Horan" width="120px" />
                <h5 className="open-sans-600">Niall Horan</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className={`${styles.testimonial_desc} open-sans-serif`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className={styles.testimonial_card}>
              <div className="text-center">
                <img
                  src="/images/user-1.png"
                  alt="Louis Tomlinson"
                  width="120px"
                />
                <h5 className="open-sans-600">Louis Tomlinson</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className={`${styles.testimonial_desc} open-sans-serif`}>
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
            <div className={styles.testimonial_card}>
              <div className="text-center">
                <img
                  src="/images/user-1.png"
                  alt="Harry Styles"
                  width="120px"
                />
                <h5 className="open-sans-600">Harry Styles</h5>
                <p className="mb-3 text-secondary">Web Developer</p>
                <p className={`${styles.testimonial_desc} open-sans-serif`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
              </div>
            </div> */}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default index;
