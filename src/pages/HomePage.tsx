import React from 'react';
import { Hero } from '../components/Hero';
import { RecentWork } from '../components/RecentWork';
import { ServicesOverview } from '../components/ServicesOverview';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <RecentWork />
      <ServicesOverview />
    </>
  );
};