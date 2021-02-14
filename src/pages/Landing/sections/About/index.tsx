import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useScreenProperties } from 'hooks/ScreenPropertiesContext';
import { useInView } from 'react-intersection-observer';

import colors from 'constants/colors';
import { ReactComponent as WhatsappIcon } from '../../../../assets/svg/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/svg/instagram.svg';
import { ReactComponent as BehanceIcon } from '../../../../assets/svg/behance.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/svg/facebook.svg';

import ProfilePhoto from '../../../../assets/ana.png';
import {
  Container,
  Content,
  DescriptionContainer,
  IconContainer,
  PhotoContainer,
} from './styles';

const About: React.FC = () => {
  const { isMobile } = useScreenProperties();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container isMobile={isMobile}>
      <Content isMobile={isMobile} ref={ref}>
        <PhotoContainer
          as={motion.section}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '300px' },
          }}
          isMobile={isMobile}
        >
          <img src={ProfilePhoto} alt="myself" />
        </PhotoContainer>
        <DescriptionContainer
          as={motion.section}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1.5, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '-1000px' },
          }}
          isMobile={isMobile}
        >
          <h1>
            Prazer! Me chamo
            <strong>
              {` `}
              Ana Lugli
            </strong>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div>
            <IconContainer
              onClick={() => window.open('https://www.behance.net/analugli')}
            >
              <BehanceIcon height="30px" width="30px" fill={colors.whine} />
            </IconContainer>
            <IconContainer
              onClick={() =>
                window.open('https://www.instagram.com/analuglifotografia')
              }
            >
              <InstagramIcon height="30px" width="30px" fill={colors.whine} />
            </IconContainer>
            <IconContainer
              onClick={() =>
                window.open('https://www.facebook.com/AnaLugliFotografia')
              }
            >
              <FacebookIcon height="30px" width="30px" fill={colors.whine} />
            </IconContainer>
            <IconContainer
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=+55(43)9905-7682',
                )
              }
            >
              <WhatsappIcon height="30px" width="30px" fill={colors.whine} />
            </IconContainer>
          </div>
        </DescriptionContainer>
      </Content>
    </Container>
  );
};

export default About;
