import React from 'react';
import { getDataCookie } from '../../middlewares/authorization';
import Header from '../../components/atoms/Header';
import TopJob from '../../components/molecules/TopJob';
import Search from '../../components/organisms/Search';

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
