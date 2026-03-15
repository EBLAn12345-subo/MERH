import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <div>
      <h1>🛍 Merch Store</h1>
      <p>Добро пожаловать!</p>
    </div>
  );
}

export default App;
