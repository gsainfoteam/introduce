import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashBoard from './DashBoard';
import Section from './Section';
import './App.css';

const basicFontFamilty = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans KR'],
  },
});

function App() {
  return (
    <ThemeProvider theme={basicFontFamilty}>
      <CssBaseline />
      <DashBoard></DashBoard>
      <Section></Section>
    </ThemeProvider>
  );
}

export default App;
