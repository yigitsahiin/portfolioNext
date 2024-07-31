'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">Yiğit <span>Şahin</span></a>
      <i className="fa-solid fa-bars" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className={activeLink === '#home' ? 'active' : ''}>Home</a>
        <a href="#services" className={activeLink === '#services' ? 'active' : ''}>Services</a>
        <a href="#projects" className={activeLink === '#projects' ? 'active' : ''}>Projects</a>
        <a href="#education" className={activeLink === '#education' ? 'active' : ''}>Education</a>
        <a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
}
