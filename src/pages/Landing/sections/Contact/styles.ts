import { Form } from '@unform/web';
import colors from 'constants/colors';
import sizes from 'constants/sizes';
import IsMobile from 'interfaces/isMobile';
import styled, { css } from 'styled-components';

export const Background = styled.div<IsMobile>`
  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  padding: ${props => (props.isMobile ? '30px' : '60px')};
  justify-content: flex-end;
  align-items: center;
`;

export const Title = styled.h3<IsMobile>`
  font-size: ${sizes.extraBig};
  font-weight: bold;
  color: ${colors.darkRed};
  text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);

  ${props =>
    props.isMobile &&
    css`
      font-size: ${sizes.big};
      text-align: center;
      margin: 0;
    `}
`;

export const TitlePrefix = styled.p<IsMobile>`
  font-size: ${sizes.regular};
  font-weight: 300;
  color: ${colors.darkRed};
  text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);

  ${props =>
    props.isMobile &&
    css`
      font-size: ${sizes.regular};
      text-align: center;
      margin: 0;
    `}
`;

export const Logo = styled.img<IsMobile>`
  object-fit: contain;
  height: 150px;

  ${props =>
    props.isMobile &&
    css`
      height: 100px;
      margin-bottom: 4vh;
    `}
`;

export const TitleAndLogo = styled.div<IsMobile>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 300px;

  ${props =>
    props.isMobile &&
    css`
      flex-direction: column-reverse;
    `}
`;

export const Container = styled.div<IsMobile>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  max-width: 800px;

  ${props =>
    props.isMobile &&
    css`
      width: 100%;
    `}
`;

export const FormContainer = styled(Form)<IsMobile>`
  margin: 5vh 0;

  ${props =>
    props.isMobile &&
    css`
      margin: 3vh 0;
    `}
`;

export const Button = styled.button`
  border: 0;
  background-color: ${colors.darkRed};
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
