import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2022 Peworld. All right reserved
        </p>
        <p className="footer__info">
          <Link href="tel:+620123456789" target="_blank">
            Telepon
          </Link>
          <Link href="mailto:support@peworld.com" target="_blank">
            Email
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default index;
