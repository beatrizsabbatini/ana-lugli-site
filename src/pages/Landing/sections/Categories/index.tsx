import CategoriesCards from 'components/CategoriesCards';
import React from 'react';

import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <Container id="categorias">
      <CategoriesCards />
    </Container>
  );
};

export default Categories;
