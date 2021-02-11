import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { useScreenProperties } from 'hooks/ScreenPropertiesContext';
import RedLogo from '../../../../assets/logo-red.png';
import {
  Background,
  TitlePrefix,
  Title,
  Logo,
  TitleAndLogo,
  Container,
} from './styles';
import FormComponent from './Form';

const Contact: React.FC = () => {
  const { isMobile } = useScreenProperties();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <Background id="contato" isMobile={isMobile}>
        <Container
          as={motion.section}
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '300px' },
          }}
          isMobile={isMobile}
        >
          <TitleAndLogo isMobile={isMobile}>
            <div>
              <TitlePrefix isMobile={isMobile}>
                Precisa de um orçamento?
              </TitlePrefix>
              <Title isMobile={isMobile}>Fale Comigo!</Title>
            </div>
            <Logo src={RedLogo} alt="logo" isMobile={isMobile} />
          </TitleAndLogo>
          <FormComponent />
        </Container>
      </Background>
    </>
  );
};

export default Contact;
