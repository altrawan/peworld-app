import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../../../helpers/env';

export default function index({ title }) {
  return (
    <Head>
      {/* Setting the viewport to make website look good on all devices */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Define a description web pag */}
      <meta
        name="description"
        content="Temukan developer berbakat &amp; terbaik di berbagai bidang keahlian"
      />
      {/* Define keywords for search engine */}
      <meta name="keywords" content="CSS, Javascript, Bootstrap, Next.js" />
      {/* Define the author */}
      <meta name="author" content="Nur Muhammad Alif Putra Setiawan" />
      {/* Add a favicon in web page */}
      <link rel="icon" href="/favicon.ico" />
      {/* Title Page */}
      <title>
        {APP_NAME} - {title}
      </title>
    </Head>
  );
}
