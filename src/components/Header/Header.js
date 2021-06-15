import { bool, func } from 'prop-types';
import React from 'react';
import { BsClock, BsList, BsPerson, BsSearch, BsX } from 'react-icons/bs';
import MobileLogo from '../../assets/logo-mobile.jpeg';
import Logo from '../../assets/logo-white.png';
import { getCurrentTime } from '../../helpers';
import useWindowSize from '../../hooks/useWindowSize';
import './Header.scss';

const Header = ({ isOpen, toggleNavbar }) => {
  const currentWidth = useWindowSize();
  const currentTime = getCurrentTime();

  return (
    <header className="header">
      <nav className="navbar">
        <button type="button" className="navbar__mobile" onClick={toggleNavbar}>
          {isOpen ? <BsX /> : <BsList />}
        </button>
        <img
          src={currentWidth < 768 ? MobileLogo : Logo}
          alt="logo"
          className="navbar__logo"
        />
        <ul className="navbar__list">
          <div className="navbar__item__divider" />
          <li className="navbar__item">
            <BsSearch />
          </li>
          <div className="navbar__item__divider" />
          <li className="navbar__item">
            <div className="navbar__item-time">
              <BsClock />
              <span className="navbar__item-timestamp">{currentTime}</span>
            </div>
          </li>
          <div className="navbar__item__divider" />
          {currentWidth < 576 ? (
            <li className="navbar__item">
              <div className="navbar__item-user">
                <BsPerson />
              </div>
            </li>
          ) : (
            <>
              <li className="navbar__item">
                <button type="button" className="navbar__link">
                  Sign In
                </button>
              </li>
              <li className="navbar__item">
                <button type="button" className="navbar__button">
                  Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  toggleNavbar: func.isRequired,
  isOpen: bool.isRequired,
};

export default Header;
