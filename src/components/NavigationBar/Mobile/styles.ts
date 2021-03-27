import colors from 'constants/colors';
import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  z-index: 10;
  top: 20px;
  left: 20px;
  min-height: 30px;
  min-width: 30px;
  padding: 13px;
  background-color: rgba(000, 000, 000, 0.1);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Rectangle = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 10px;
  background-color: ${colors.beige};
  margin: 3px 0;
`;
