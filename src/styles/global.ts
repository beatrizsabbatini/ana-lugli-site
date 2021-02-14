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

  /* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #2b2b2b;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.79);

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgb(189, 189, 189);
}



@media only screen and (max-width : 1180px) {

    /* width */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        display: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        display: none;

    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        display: none;
    }


}
`;
