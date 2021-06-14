import React, { useState } from 'react';
import Aside from './components/Aside/Aside';
import Header from './components/Header';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import './styles/index.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Sidebar isOpen={isOpen} />
      <div className="wrapper">
        <Header isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <main className="main">
          <div className="main__wrapper">
            <Posts />
            <Aside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
