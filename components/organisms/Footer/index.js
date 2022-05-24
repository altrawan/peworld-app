import React from 'react';
import Image from '../../atoms/Image';
import Contact from '../../molecules/Contact';

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

        <Contact />
      </div>
    </section>
  );
}
