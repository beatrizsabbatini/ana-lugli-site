import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Box } from './styles';

const categories = [
  {
    id: 0,
    title: '15 anos',
  },
  {
    id: 1,
    title: 'Pré-wedding',
  },
  {
    id: 2,
    title: 'Grávida',
  },
  {
    id: 3,
    title: 'Festa',
  },
  {
    id: 4,
    title: 'Eventos',
  },
];

export interface Category {
  id: number;
  title: string;
  url: string;
}

interface CategoriesListProps {
  currentTheme?: Category;
}

const CategoriesList: React.FC<CategoriesListProps> = ({ currentTheme }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 1, // tempo que deve aguardar para iniciar animação
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Container
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, ease: 'easeOut' }}
      variants={containerVariants}
    >
      {categories.map(item => (
        <Box
          isSelected={currentTheme?.id === item.id}
          as={motion.div}
          variants={itemVariants}
        >
          <h3>{item.title}</h3>
        </Box>
      ))}
    </Container>
  );
};

export default CategoriesList;
