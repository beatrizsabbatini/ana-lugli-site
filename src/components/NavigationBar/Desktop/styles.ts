import styled from 'styled-components';

import { ReactComponent as Svg } from '../../../assets/svg/instagram.svg';

export const Container = styled.nav`
  background-color: black;
  opacity: 0.7;
  width: 100vw;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 100px;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const NavLink = styled.a`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #cdcdcd;
    text-decoration: none;
  }
`;

export const NavItem = styled.li`
  padding: 30px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AcessPortalButton = styled.div`
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  padding: 8px;
  border-radius: 100px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  transition: 1s ease;

  :hover {
    background-color: white;
  }
`;

export const PortalLink = styled.a`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  transition: 1s ease;
  text-decoration: none;
  :hover {
    color: black;
    text-decoration: none;
  }
`;

export const InstagramLogo = styled(Svg)`
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    color: #cdcdcd;
  }
`;
