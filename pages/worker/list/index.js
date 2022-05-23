import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../../../helpers/env';

const index = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME} - List Page</title>
      </Head>
    </>
  );
};

export default index;
