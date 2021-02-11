import colors from 'constants/colors';
import styled, { css } from 'styled-components';

interface IsMobile {
  isMobile?: boolean;
}

export const BannerSlide = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index: 1;
`;

export const SmallText = styled.h3<IsMobile>`
  font-size: 2rem;
  font-weight: 100;
  color: #d9d8d8;
  text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);
  margin-left: 2px;

  ${props =>
    props.isMobile &&
    css`
      font-size: 1.5rem;
    `}
`;

export const BigText = styled.h3<IsMobile>`
  font-size: 4rem;
  font-weight: bold;
  color: #d9d8d8;
  text-shadow: 2px 2px 4px rgba(152, 150, 150, 0.69);
  text-transform: uppercase;
  line-height: 50px;

  ${props =>
    props.isMobile &&
    css`
      font-size: 3rem;
      line-height: 35px;
    `}
`;

export const TitleContainer = styled.div<IsMobile>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20vh;
  left: 125px;
  z-index: 2;

  ${props =>
    props.isMobile &&
    css`
      top: 15%;
      left: 30px;
    `}
`;

export const CarouselContainer = styled.div<IsMobile>`
  h3 {
    font-weight: 100;
  }

  .carousel {
    z-index: 1;

    div {
      ol {
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        right: 100px;
        top: 10vh;
        margin: 0;
      }
    }
  }

  .carousel {
    div {
      ol {
        li {
          background-color: ${colors.beige};
          border-radius: 10px;
          height: 100px;
          width: 3px;
        }
      }
    }
  }

  ${props =>
    props.isMobile &&
    css`
      .carousel {
        div {
          ol {
            right: 5vw;
            bottom: 0;
          }
        }
      }

      .carousel {
        div {
          ol {
            li {
              height: 45px;
              width: 4px;
            }
          }
        }
      }
    `}
`;

export const DecorationContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  top: 40vh;
  left: 0;
`;

export const DecorationText = styled(SmallText)`
  font-size: 1.5rem;
  font-weight: 300;
  color: #d9d8d8;
  margin: 0;
  margin-left: 15px;
`;
