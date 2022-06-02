import React from 'react';
import Link from 'next/link';

export default function index({ token }) {
  return (
    <Link href={token ? '/home' : '/'}>
      <div>
        <img
          src="/images/logo-purple.svg"
          alt="Brand Logo"
          width={150}
          height={150}
          style={{ padding: '-50px' }}
        />
      </div>
    </Link>
  );
}
