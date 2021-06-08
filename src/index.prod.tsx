import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { theme } from 'src/theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root') );
