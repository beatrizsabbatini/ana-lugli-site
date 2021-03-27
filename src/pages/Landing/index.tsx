import Footer from 'components/Footer';
import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import About from './sections/About';
import Banner from './sections/Banner';
import Categories from './sections/Categories';
import Contact from './sections/Contact';

import { Container } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container id="banner">
      <NavigationBar />
      <Banner />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};

export default LandingPage;
