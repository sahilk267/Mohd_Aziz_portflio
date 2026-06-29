import Hero from './components/Hero';
import About from './components/About';
import CoreExpertise from './components/CoreExpertise';
import FeaturedProjects from './components/FeaturedProjects';
import CaseStudies from './components/CaseStudies';
import ProfessionalImpact from './components/ProfessionalImpact';
import CareerTimeline from './components/CareerTimeline';
import WhatImBuilding from './components/WhatImBuilding';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreExpertise />
      <FeaturedProjects />
      <CaseStudies />
      <ProfessionalImpact />
      <CareerTimeline />
      <WhatImBuilding />
    </>
  );
}