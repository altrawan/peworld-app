import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Reason from '../components/Reason';
import Skill from '../components/Skill';
import Opinion from '../components/Opinion';
import Subscribe from '../components/Subscribe';

const index = () => {
  return (
    <>
      <Header title="Landing Page" />

      <Hero />
      <Reason />
      <Skill />
      <Opinion />
      <Subscribe />
    </>
  );
};

index.layout = 'mainLayout';

export default index;
