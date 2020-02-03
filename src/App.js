import React from 'react';
import { LandingPage } from './containers';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <LandingPage />
    </Provider>
  );
}

export default App;
