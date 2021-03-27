import colors from 'constants/colors';
import styled, { css } from 'styled-components';

interface BoxProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
/* modificação 2 */

export const Box = styled.div<BoxProps>`
  margin: 5px 0;
  border-radius: 0 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h3 {
    color: ${colors.perl};
    font-size: 1.5rem;
    font-weight: 200;
    color: ${colors.darkerGray};
    padding: 10px;
    padding-left: 130px;
    width: 300px;
    text-decoration: underline;
    cursor: pointer;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      transition: all 1s ease;
      background-color: ${colors.defaultPink};
      -webkit-box-shadow: -3px 3px 46px -13px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -3px 3px 46px -13px rgba(0, 0, 0, 0.75);
      box-shadow: -3px 3px 46px -13px rgba(0, 0, 0, 0.75);

      h3 {
        color: ${colors.perl};
        text-decoration: none;
      }
    `}
`;
