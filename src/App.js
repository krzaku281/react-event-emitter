import React from 'react';

import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
