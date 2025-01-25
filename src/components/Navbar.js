import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";
import { GoHome } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";






const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='navbar-ul'>
        <li><Link to="hero" smooth={true} duration={500}><GoHome /><p>Home</p></Link></li>
        <li><Link to="about" smooth={true} duration={500}><IoPersonSharp /><p>About</p></Link></li>
        <li><Link to="resume" smooth={true} duration={500}><LuFileSpreadsheet/><p>Resume</p></Link></li>
        <li><Link to="projects" smooth={true} duration={500}><GrProjects/><p>Projects</p></Link></li>
        <li><Link to="Contact" smooth={true} duration={500}><MdMailOutline/><p>Contact</p></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
