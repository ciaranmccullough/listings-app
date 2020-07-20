import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import Router from '../src/components/Router';
import Container from '@material-ui/core/Container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <ThemeProvider>
  <React.StrictMode>
    <CssBaseline />
    <Container>
      <Router />
    </Container>
  </React.StrictMode>,
  // </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
