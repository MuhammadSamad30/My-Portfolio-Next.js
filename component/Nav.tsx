"use client";
import { useState } from 'react';
import Link from 'next/link'

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='navContainer'>
    <h1 id='heading'>Portfolio</h1>
    <button id='hamburger' onClick={toggleMenu}>
      &#9776;
    </button>
    <ul id='nav' className={isOpen ? "active" : ""}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/project">Project</Link></li>
      <li><Link href="/skills">Skills</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>
  )
}

export default Nav;
