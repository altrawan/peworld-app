import React from 'react';
import Cookies from 'js-cookie';
import { Navbar, Footer } from 'components';

export default function layout({ children }) {
  const token = Cookies.get('token');
  return (
    <>
      <Navbar token={token} />
      {children}
      <Footer />
    </>
  );
}
