import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </>
    </div>
  );
}

export default App;
