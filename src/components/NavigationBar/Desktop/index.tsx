import React from 'react';

import colors from 'constants/colors';
import { motion } from 'framer-motion';
import {
  Container,
  NavLink,
  NavItem,
  Links,
  AcessPortalButton,
  PortalLink,
  InstagramLogo,
} from './styles';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

const Desktop: React.FC = () => {
  const navButtons = [
    {
      id: 1,
      title: 'Início',
      route: '#banner',
    },
    {
      id: 2,
      title: 'Destaques',
      route: '#destaques',
    },
    {
      id: 3,
      title: 'Portfólio',
      route: '#portfolio',
    },
    {
      id: 4,
      title: 'Quem sou',
      route: '#sobre',
    },
  ];

  return (
    <Container>
      <Logo height={50} fill={colors.white} />
      <Links>
        {navButtons.map(item => (
          <NavItem key={item.id}>
            <NavLink href={item.route}>{item.title}</NavLink>
          </NavItem>
        ))}
        <AcessPortalButton>
          <PortalLink href="#contato">Entre em Contato</PortalLink>
        </AcessPortalButton>
        <InstagramLogo height={20} fill={colors.white} />
      </Links>
    </Container>
  );
};
export default Desktop;
