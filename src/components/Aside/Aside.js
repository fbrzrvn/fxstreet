import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__top">
        <div className="aside__top__bars" />
        <div className="aside__top__bars" />
      </div>
      <div className="aside__bottom">
        <div className="aside__bottom__bars" />
        <div className="aside__bottom__circle" />
      </div>
    </aside>
  );
};

export default Aside;
