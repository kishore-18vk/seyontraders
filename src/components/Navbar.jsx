import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'ABOUT', path: '/about' },
        {
            label: 'PRODUCTS', path: '/products', dropdown: [
                { label: 'Coir Pith / Cocopeat', path: '/products/cocopeat' },
                { label: 'Coir Fibre', path: '/products/coir-fibre' },
                { label: 'Husk Chips', path: '/products/husk-chips' },
                { label: 'Grow Bags', path: '/products/grow-bags' },
            ]
        },
        { label: 'PROCESS', path: '/process' },
        { label: 'SUSTAINABILITY', path: '/sustainability' },
        { label: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                    <div className="logo-icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1.5" />
                            <path d="M18 6C18 6 10 14 10 20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20C26 14 18 6 18 6Z" fill="white" fillOpacity="0.9" />
                            <path d="M18 12C18 12 13 17.5 13 21C13 23.8 15.2 26 18 26C20.8 26 23 23.8 23 21C23 17.5 18 12 18 12Z" fill="#2dba6e" />
                            <line x1="18" y1="20" x2="18" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="14" y1="22" x2="18" y2="24" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                            <line x1="22" y1="22" x2="18" y2="24" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <span className="logo-main">SEYON</span>
                        <span className="logo-sub">TRADERS</span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="nav-links">
                    {navLinks.map(link => (
                        <li key={link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                onClick={() => { if (!link.dropdown) setMenuOpen(false); }}
                            >
                                {link.label}
                                {link.dropdown && <span className="dropdown-arrow">&#9660;</span>}
                            </NavLink>
                            {link.dropdown && (
                                <ul className="dropdown-menu">
                                    {link.dropdown.map(d => (
                                        <li key={d.label}>
                                            <NavLink to={d.path} className="dropdown-link">{d.label}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <div key={link.label} className="mobile-item">
                        <NavLink
                            to={link.path}
                            className="mobile-link"
                            onClick={() => { if (!link.dropdown) setMenuOpen(false); }}
                        >
                            {link.label}
                        </NavLink>
                        {link.dropdown && (
                            <div className="mobile-dropdown">
                                {link.dropdown.map(d => (
                                    <NavLink key={d.label} to={d.path} className="mobile-dropdown-link" onClick={() => setMenuOpen(false)}>
                                        {d.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
