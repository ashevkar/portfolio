import React from 'react';
import './navbar.css';
import { FaHome, FaProjectDiagram, FaFolderOpen, FaAddressBook, FaFileAlt } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', link: "home" }, 
    { icon: <FaProjectDiagram />, label: 'Skills', link: "skills" }, 
    { icon: <FaFileAlt />, label: 'Resume', link: "resume" },
    { icon: <FaFolderOpen />, label: 'Projects', link: "projects" }, 
    { icon: <FaAddressBook />,label: 'Contact', link: "contact" } 
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item, index) => (
         <ScrollLink
         key={index}
         to={item.link}
         spy={true}
         smooth={true}
         offset={0}
         duration={100}
         className="nav-item"
         title={item.label}
       >
         {item.icon}
       </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
