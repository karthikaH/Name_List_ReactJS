import React, { Component } from 'react';
import './App.css';
import NamesList from './containers/NamesList/index';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

//setting the theme for UX
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f50057',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NamesList></NamesList>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
