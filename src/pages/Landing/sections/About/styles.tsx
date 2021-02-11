import styled, { keyframes } from 'styled-components';

import colors from 'constants/colors';
import IsMobile from 'interfaces/isMobile';
import sizes from 'constants/sizes';

export const Container = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionContainer = styled.div<IsMobile>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 60vh;
  padding: 6rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightPink};

  h1 {
    position: relative;
    font-weight: 100;
    font-size: ${sizes.medium};
    color: ${colors.whine};
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
    border: 1px solid ${colors.whine};
  }

  p {
    text-align: center;
    font-weight: 100;
    font-size: ${sizes.regular};
    color: ${colors.whine};
  }

  div {
    display: inline-block;
  }
`;

export const IconContainer = styled.div`
  margin: 0 16px;
  cursor: pointer;
`;

export const PhotoContainer = styled.div<IsMobile>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 150px;
  height: 60vh;
  width: 40%;
  background-color: ${colors.perl};

  img {
    height: 40vh;
    width: 40vh;
    border-radius: 100%;
    object-fit: contain;
    padding: 8px;
    border: 2px solid ${colors.gray};
  }
`;
