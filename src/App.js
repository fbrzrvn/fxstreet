import React from 'react';
import Aside from './components/Aside/Aside';
import Header from './components/Header';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import './styles/index.scss';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <main className="main">
          <Posts />
          <Aside />
        </main>
      </div>
    </div>
  );
}

export default App;
