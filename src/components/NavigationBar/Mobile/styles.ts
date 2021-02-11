import colors from 'constants/colors';
import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
  min-height: 40px;
  min-width: 40px;
  padding: 13px;
  background-color: rgba(000, 000, 000, 0.1);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Rectangle = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 10px;
  background-color: ${colors.beige};
  margin: 3.5px 0;
`;
