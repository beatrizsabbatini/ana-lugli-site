import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';
import AppProvider from './hooks';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#7D3C3C',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
