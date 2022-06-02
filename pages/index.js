import React from 'react';
import axios from 'axios';
import Header from '../components/atoms/Header';
import Hero from '../components/organisms/Hero';
import Reason from '../components/organisms/Reason';
import Skill from '../components/organisms/Skill';
import Opinion from '../components/organisms/Opinion';
import Subscribe from '../components/molecules/Subscribe';
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
    revalidate: 60,
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
