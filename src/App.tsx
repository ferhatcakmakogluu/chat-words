import React from 'react';
import { createGlobalStyle } from 'styled-components';
import VideoChat from './components/VideoChat';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    overflow: hidden;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <VideoChat />
    </>
  );
};

export default App;
