import Footer from 'components/Footer';
import React from 'react';

import Scrollbar from 'react-smooth-scrollbar';
import NavigationBar from '../../components/NavigationBar';
import About from './sections/About';
import Banner from './sections/Banner';
import Contact from './sections/Contact';

import { Container } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <NavigationBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};

export default LandingPage;
