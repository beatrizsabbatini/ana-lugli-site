import colors from 'constants/colors';
import styled, { css } from 'styled-components';

interface LabelProps {
  url: string;
}

interface IsMobile {
  isMobile: boolean;
}

export const CategoriesListContainer = styled.div`
  position: absolute;
  left: 0;
  top: 30%;
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Label = styled.label<LabelProps>`
  cursor: pointer;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
`;

export const IconsAndButtonContainer = styled.div<IsMobile>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  align-items: center;

  & :nth-child(n) {
    margin: 0 20px 0 20px;

    ${({ isMobile }) =>
      isMobile &&
      css`
        margin: 20px;
      `}
  }
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

export const ButtonContainer = styled.div<IsMobile>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.pink};
  border-radius: 40px;
  transition: all 1s ease;

  ${({ isMobile }) =>
    !isMobile &&
    css`
      padding: 10px 0;
    `}

  &:hover {
    background-color: ${colors.pink};
  }
`;

export const ButtonText = styled.p<IsMobile>`
  font-size: 12px;
  color: ${colors.pink};
  text-align: center;
  margin: 0;
  padding: 5px 20px;
  transition: all 1s ease;

  ${({ isMobile }) =>
    isMobile &&
    css`
      padding: 0;
    `}

  &:hover {
    color: ${colors.perl};
  }
`;

const ArrowStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.pink};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 40%;
  z-index: 2;
  -webkit-box-shadow: -1px 2px 21px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 21px -5px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 21px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
`;

export const ArrowLeft = styled.div`
  ${ArrowStyles};
  left: -30px;

  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
    margin-right: 5px;
  }
`;

export const ArrowRight = styled.div`
  ${ArrowStyles};
  right: -30px;

  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
    margin-left: 5px;
  }
`;

export const Category = styled.h1`
  margin-top: -70px;
  width: 100%;
  text-align: center;
`;
