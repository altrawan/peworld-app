import React from 'react';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function layout({ children }) {
  const token = Cookies.get('token');
  return (
    <>
      <div className="secondary-layout">
        <Navbar token={token} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
