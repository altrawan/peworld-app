import React from 'react';
import Image from 'next/image';
import { LogoWhite } from 'assets';

export default function index() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_image">
            <Image
              src={LogoWhite}
              alt="Peworld Hire"
              width={200}
              height={200}
            />
          </div>

          <p className="footer_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>

        <section className="footer_section">
          <div className="footer_content">
            <p className="footer_copyright">
              &copy; 2022 Peworld. All right reserved
            </p>
            <p className="footer_info">
              <a href="tel:+620123456789" target="_blank" rel="noreferrer">
                Phone
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
        </section>
      </div>
    </footer>
  );
}
