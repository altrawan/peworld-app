import React from 'react';
import { getDataCookie } from '../../middlewares/authorization';
import Header from '../../components/Header';
import TopJob from '../../components/TopJob';
import Search from '../../components/Search';

export async function getServerSideProps(context) {
  const storageCookie = await getDataCookie(context);
  if (!storageCookie.token) {
    return {
      redirect: {
        destination: '/worker/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const index = () => {
  return (
    <>
      <Header title="Home Page" />

      <TopJob />
      <Search />
    </>
  );
};

index.layout = 'mainLayout';

export default index;
