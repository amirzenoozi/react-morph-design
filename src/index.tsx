import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'src/helpers/i18next-config';
import { ThemeProvider } from 'react-jss';
import { theme } from 'src/theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root') );
