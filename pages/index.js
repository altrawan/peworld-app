/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Header from '../components/atoms/Header';
import { Hero, Reason, Skill, Opinion, Subscribe } from '../components';
import { API_URL } from '../helpers/env';

export async function getStaticProps(context) {
  const response = await axios({
    method: 'GET',
    url: `${API_URL}opinion`,
  });
  return {
    props: {
      data: response.data.data,
    },
    revalidate: 15,
  };
}

const index = ({ data }) => {
  return (
    <>
      <Header title="Landing Page" />

      <Hero />
      <Reason />
      <Skill />
      <Opinion data={data} />
      <Subscribe />
    </>
  );
};

index.layout = 'mainLayout';

export default index;
