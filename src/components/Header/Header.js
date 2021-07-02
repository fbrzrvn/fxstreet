import React from 'react';
import logoMobile from '../../assets/logoMobile.svg';
import useWindowSize from '../../hooks/useWindowSize';
import './Header.scss';

const Header = () => {
  const currentWidth = useWindowSize();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {currentWidth > 768 ? (
          <>
            <div className="circle-left" />
            <div className="bars-left" />{' '}
          </>
        ) : (
          <img src={logoMobile} alt="logo-mobile" />
        )}
      </div>
      <div className="navbar__right">
        {currentWidth > 768 ? (
          <>
            <div className="bars-rigth" />
            <div className="navbar__item__divider" />
            <div className="circle" />
            <div className="navbar__item__divider" />
            <div className="circle" />
            <div className="navbar__item__divider" />
            <div className="navbar__right__small">
              <div className="circle" />
              <div className="bars-small" />
            </div>
          </>
        ) : (
          <>
            <div className="circle-mobile" />
            <div className="circle-mobile" />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
