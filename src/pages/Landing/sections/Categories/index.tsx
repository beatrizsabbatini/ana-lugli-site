import CategoriesCarousel from 'components/CategoriesCarousel';
import React from 'react';

import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <Container>
      <CategoriesCarousel />
    </Container>
  );
};

export default Categories;
