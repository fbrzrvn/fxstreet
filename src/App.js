import React, { useState } from 'react';
import Header from './components/Header';
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
      </div>
    </div>
  );
}

export default App;
