import React from 'react';
import Logo from '../../assets/logo.svg';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Logo} alt="FXStreet-logo" className="sidebar__logo" />
      <div className="sidebar__bars" />
      <div className="sidebar__bars" />
      <div className="sidebar__bars" />
      <div className="sidebar__bars" />
      <div className="sidebar__bars" />
    </div>
  );
};

export default Sidebar;
