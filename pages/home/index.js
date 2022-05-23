import React from 'react';
import Header from '../../components/Header';
import TopJob from '../../components/TopJob';
import Search from '../../components/Search';

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
