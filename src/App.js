import React from 'react';
import Navigation from './Navigation';
import Section from './Section';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>인포팀에 지원하시는 여러분을 환영합니다.</h1>
      </header>
      <Navigation></Navigation>
      <Section></Section>
      <Footer />
    </div>
  );
}

export default App;
