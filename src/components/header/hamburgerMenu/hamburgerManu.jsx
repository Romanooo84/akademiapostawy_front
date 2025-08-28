import React, { useState } from 'react';
import css from './hamburgerMenu.module.css'; // używamy CSS Modules

const HamburgerMenu = ({buttons}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuWrapper}>
      <button className={css.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${css.menu} ${isOpen ? css.show : ''}`}>
        {buttons}
     </div>
    </div>
  );
};

export default HamburgerMenu;