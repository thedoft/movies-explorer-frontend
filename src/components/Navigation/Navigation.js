import React from 'react';
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navigation = () => (
  <>
    {
      (window.innerWidth > 768) ? <Menu /> : <MobileMenu />
    }
  </>
);

export default Navigation;
