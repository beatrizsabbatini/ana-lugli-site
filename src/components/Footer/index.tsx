import React from 'react';

import colors from 'constants/colors';
import { useScreenProperties } from 'hooks/ScreenPropertiesContext';
import { ReactComponent as WhatsappIcon } from '../../assets/svg/whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as BehanceIcon } from '../../assets/svg/behance.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { Container, Divider, IconContainer, Icons } from './styles';

const Footer: React.FC = () => {
  const { isMobile } = useScreenProperties();

  return (
    <Container isMobile={isMobile}>
      <p>contato@analugli.com.br</p>
      <Divider isMobile={isMobile} />
      <p>+55 (43) 9 8871-4058</p>
      <Divider isMobile={isMobile} />
      <Icons>
        <IconContainer>
          <BehanceIcon height="20px" width="20px" fill={colors.almostWhite} />
        </IconContainer>
        <IconContainer>
          <InstagramIcon height="20px" width="20px" fill={colors.almostWhite} />
        </IconContainer>
        <IconContainer>
          <FacebookIcon height="20px" width="20px" fill={colors.almostWhite} />
        </IconContainer>
        <IconContainer>
          <WhatsappIcon height="20px" width="20px" fill={colors.almostWhite} />
        </IconContainer>
      </Icons>
    </Container>
  );
};

export default Footer;
