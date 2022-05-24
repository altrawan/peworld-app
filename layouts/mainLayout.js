import React from 'react';
import Cookies from 'js-cookie';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

export default function layout({ children }) {
  const token = Cookies.get('token');
  return (
    <>
      <Navbar token={token} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
