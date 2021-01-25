import React from 'react'
import { CryptoTable, ConverterBlock } from './components'


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Конвертор криптовалют</h1>
      </header>
        <CryptoTable />
        <ConverterBlock/>

    </div>
  );
}

export default App;
