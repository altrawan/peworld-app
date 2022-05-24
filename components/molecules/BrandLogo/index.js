import React from 'react';
import Link from 'next/link';
import Image from '../../atoms/Image';

export default function index() {
  return (
    <Link href="/" style={{ marginTop: '-50px' }}>
      <Image
        className="brand__logo"
        srcImage="/images/logo-purple.svg"
        altImage="Brand Logo"
        imageClass="img-cover"
        imageWidth={150}
        imageHeight={100}
      />
    </Link>
  );
}
