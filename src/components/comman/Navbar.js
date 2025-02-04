import React from 'react';
import './navbar.css'
import { FaHome, FaFolder, FaSuitcase, FaTools, FaPencilAlt } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', link:"/"},
    { icon: <FaFolder />, label: 'Files' , link:"/skills"},
    { icon: <FaSuitcase />, label: 'Projects', link:"/resume"},
    { icon: <FaTools />, label: 'Tools', link:"/project"},
    { icon: <FaPencilAlt />, label: 'Edit', link:"/contact" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className="nav-item">
            
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
