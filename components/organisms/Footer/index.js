import React from 'react';
import Image from '../../atoms/Image';

export default function index() {
  return (
    <section className="footer__container">
      <div className="container">
        <div className="footer__wrapper">
          <Image
            srcImage="/images/logo-white.svg"
            altImage="Peworld Hire"
            className="footer__image"
            imageClass="img-cover"
            imageWidth={200}
            imageHeight={200}
          />
          <p className="footer__text">
            Temukan developer berbakat &amp; terbaik di berbagai bidang keahlian
          </p>
        </div>

        <footer className="footer">
          <div className="footer__content">
            <p className="footer__copyright">
              &copy; 2022 Peworld. All right reserved
            </p>
            <p className="footer__info">
              <a href="tel:+620123456789" target="_blank" rel="noreferrer">
                Telepon
              </a>
              <a
                href="mailto:support@peworld.com"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
