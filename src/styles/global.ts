import colors from 'constants/colors';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: #EBEBEB;
    color: #BF7979;
    -webkit-font-smoothing: antialised;
  }

  body, input, button{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  p{
    color: ${colors.beige};
    margin: 0;
    padding: 0;
  }

  button{
    cursor: pointer
  }
`;
