import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation';
import Section from './Section';
import Footer from './Footer';
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
      말랑카우
      <header className="App-header">
        <h1>인포팀에 지원하시는 여러분을 환영합니다.</h1>
      </header>
      <Navigation></Navigation>
      <Section></Section>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
