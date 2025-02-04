import React from 'react';
import './navbar.css'
import { FaHome, FaFolder, FaSuitcase, FaTools, FaPencilAlt } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaFolder />, label: 'Files' },
    { icon: <FaSuitcase />, label: 'Projects' },
    { icon: <FaTools />, label: 'Tools' },
    { icon: <FaPencilAlt />, label: 'Edit' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a key={index} href="#" className="nav-item">
            
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
