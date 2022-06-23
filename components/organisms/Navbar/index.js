import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { UserProfile } from 'components';
import { IconClose, IconToggler, LogoPurple, IconBell, IconMail } from 'assets';

const index = ({ token = false }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [navbar, setNavbar] = useState(false);

  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

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
        <Link href="/">
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
          {loading ? (
            <></>
          ) : token && router.pathname !== '/' ? (
            <ul className="navbar-nav ms-auto main">
              <li className="nav-item">
                <button className="btn">
                  <Image src={IconBell} width={30} height={30} />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn mx-3">
                  <Image src={IconMail} width={30} height={30} />
                </button>
              </li>
              <UserProfile token={token} />
            </ul>
          ) : token && router.pathname === '/' ? (
            <ul className="navbar-nav ms-auto auth">
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <Link href={decoded.role === 1 ? '/recruiter' : '/worker'}>
                <button className="btn_auth signup">Profile</button>
              </Link>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto start">
              <Link href="/auth/login">
                <button className="btn_auth signin">Masuk</button>
              </Link>
              <Link href="/auth/register">
                <button className="btn_auth signup">Daftar</button>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default index;
