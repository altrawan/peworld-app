import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrandLogo from '../../atoms/BrandLogo';
import UserProfile from '../../atoms/UserProfile';

const index = ({ token = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-shadow">
      <div className="container">
        <div className="navbar-brand">
          <BrandLogo token={token} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <Image src="/icons/icon-close.svg" width={18} height={18} />
          ) : (
            <Image src="/icons/icon-toggler.svg" width={25} height={25} />
          )}
        </button>
        <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav ms-auto">
            {loading ? (
              <></>
            ) : token ? (
              <>
                <li className="nav-item">
                  <button className="btn">
                    <Image src="/icons/icon-bell.svg" width={30} height={30} />
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn mx-3">
                    <Image src="/icons/icon-mail.svg" width={30} height={30} />
                  </button>
                </li>
                <UserProfile token={token} />
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <button className="btn btn__action signin me-md-4">
                    Masuk
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="btn btn__action signup mx-md-3">
                    Daftar
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
