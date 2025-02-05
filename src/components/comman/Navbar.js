import React from 'react';
import './navbar.css';
import { FaHome, FaFolder, FaSuitcase, FaTools, FaPencilAlt } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', link: "home" }, 
    { icon: <FaFolder />, label: 'Skills', link: "skills" }, 
    { icon: <FaSuitcase />, label: 'Resume', link: "resume" },
    { icon: <FaTools />, label: 'Projects', link: "projects" }, 
    { icon: <FaPencilAlt />, label: 'Contact', link: "contact" } 
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
         offset={-70}
         duration={200}
         className="nav-item"
       >
         {item.icon}
       </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
