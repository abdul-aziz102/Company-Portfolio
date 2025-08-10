import React from 'react';
import Banner from '../Components/Banner';
import Brandnames from '../Components/Brandnames';
import VisionMissionSlider from '../Components/Inorm';
import Services from '../Components/OurServices';
import DigitalSolutions from '../Components/DigitalSolutions';
import Index from '../Components/index';
import StatsCounter from '../Components/StatsCounter';
import TechStackVisualization from '../Components/TechStackVisualization';
import ProcessTimeline from '../Components/ProcessTimeline';// ✅ MISSING IMPORT FIXED

const Home = () => {
  return (
    <>
    
      <Banner />

      <Brandnames />
      <Index />
      
      <VisionMissionSlider />
      <Services />
      
      <ProcessTimeline />
      <TechStackVisualization />
      <StatsCounter />
      <DigitalSolutions />
    </>
  );
};

export default Home;
