import React from 'react';
import Header from '../components/atoms/Header';
import Hero from '../components/organisms/Hero';
import Reason from '../components/organisms/Reason';
import Skill from '../components/organisms/Skill';
import Opinion from '../components/organisms/Opinion';
import Subscribe from '../components/molecules/Subscribe';

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
