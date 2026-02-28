import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import seyonLogo from '../assets/seyon_logo.jpg';
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
                    <img src={seyonLogo} alt="Seyon Traders Logo" className="logo-img" />
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
