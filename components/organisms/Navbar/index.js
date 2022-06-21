import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserProfile from '../../atoms/UserProfile';
import { IconClose, IconToggler, LogoPurple } from '../../../assets';

const index = ({ token = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    setLoading(false);
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-white ${
        navbar ? 'navbar-shrink' : ''
      }`}
      id="navigation"
    >
      <div className="container">
        <Link href={token ? '/home' : '/'}>
          <div className="navbar-brand">
            <Image src={LogoPurple} alt="Peworld" quality={100} />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <Image src={IconClose} width={18} height={18} />
          ) : (
            <Image src={IconToggler} width={25} height={25} />
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
                  <button className="btn_auth signin">Masuk</button>
                </Link>
                <Link href="/auth/register">
                  <button className="btn_auth signup">Daftar</button>
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
