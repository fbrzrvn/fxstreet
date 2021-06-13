import { bool } from 'prop-types';
import React from 'react';
import Logo from '../../assets/logo.png';
import './Sidebar.scss';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <img src={Logo} alt="FXStreet-logo" className="sidebar__logo" />
      <ul className="sidebar__list">
        <li>
          <button type="button" className="sidebar__link">
            Link 1
          </button>
        </li>
        <li>
          <button type="button" className="sidebar__link">
            Link 2
          </button>
        </li>
        <li>
          <button type="button" className="sidebar__link">
            Link 3
          </button>
        </li>
        <li>
          <button type="button" className="sidebar__link">
            Link 4
          </button>
        </li>
        <li>
          <button type="button" className="sidebar__link">
            Link 5
          </button>
        </li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: bool.isRequired,
};

export default Sidebar;
