import colors from 'constants/colors';
import IsMobile from 'interfaces/isMobile';
import styled, { css } from 'styled-components';

export const Container = styled.div<IsMobile>`
  background-color: ${colors.darkRed};
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ isMobile }) =>
    isMobile &&
    css`
      flex-direction: column;
      height: fit-content;
      padding: 10px 0;
    `}
`;

export const Divider = styled.div<IsMobile>`
  height: 80%;
  background-color: ${colors.white};
  width: 1px;
  margin: 0 10px;
  opacity: 0.5;

  ${({ isMobile }) =>
    isMobile &&
    css`
      height: 1px;
      width: 90%;
      margin: 10px 0;
    `}
`;

export const IconContainer = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
