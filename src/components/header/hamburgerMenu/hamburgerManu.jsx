import React, { useState } from 'react';
import css from './hamburgerMenu.module.css'; // używamy CSS Modules

const HamburgerMenu = ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Tworzymy przyciski z dodatkowym onClick zamykającym menu
  const enhancedButtons = React.Children.map(buttons, (button) =>
    React.cloneElement(button, {
      onClick: (e) => {
        if (button.props.onClick) button.props.onClick(e); // zachowaj oryginalny handler
        setIsOpen(false); // zamknij menu
      },
    })
  );

  return (
    <div className={css.menuWrapper}>
      <button className={css.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${css.menu} ${isOpen ? css.show : ''}`}>
        {enhancedButtons}
      </div>
    </div>
  );
};

export default HamburgerMenu;
