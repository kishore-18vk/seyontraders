import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* CTA Banner */}
            <div className="footer-cta">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <span className="section-tag">GET IN TOUCH</span>
                            <h2 className="cta-heading">HOW CAN WE<br /><em>HELP YOU?</em></h2>
                        </div>
                        <Link to="/contact" className="btn-white">CONTACT US</Link>
                    </div>
                </div>
            </div>

            {/* Footer Main */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22" cy="22" r="21" stroke="white" strokeWidth="1.5" />
                                    <path d="M22 7C22 7 12 17 12 25C12 30.5 16.5 35 22 35C27.5 35 32 30.5 32 25C32 17 22 7 22 7Z" fill="white" fillOpacity="0.9" />
                                    <path d="M22 14C22 14 16 21 16 26C16 29.3 18.7 32 22 32C25.3 32 28 29.3 28 26C28 21 22 14 22 14Z" fill="#2dba6e" />
                                    <line x1="22" y1="25" x2="22" y2="37" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <div>
                                    <span className="foot-logo-main">SEYON</span>
                                    <span className="foot-logo-sub">TRADERS</span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                Producing high quality coir products and providing sustainable growing solutions to help crops thrive worldwide.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                                <a href="https://www.instagram.com/seyon.traders_?igsh=OGk5MDVkc3hqc3Zj" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                <a href="https://wa.me/916383286808" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/process">Our Process</Link></li>
                                <li><Link to="/sustainability">Sustainability</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Products</h4>
                            <ul className="footer-links">
                                <li><Link to="/products/cocopeat">Coir Pith / Cocopeat</Link></li>
                                <li><Link to="/products/coir-fibre">Coir Fibre</Link></li>
                                <li><Link to="/products/husk-chips">Husk Chips</Link></li>
                                <li><Link to="/products/grow-bags">Grow Bags</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Contact</h4>
                            <ul className="footer-contact-list">
                                <li>
                                    <MdPlace className="contact-icon" />
                                    <span>D.No.10/362, Sikkarasampalayam,<br />Maruduraiyanvalasu (Po), Sivanmalai Village,<br />Kangayam – 638 701, Tirupur Dist.,<br />Tamil Nadu, India</span>
                                </li>
                                <li>
                                    <MdPhone className="contact-icon" />
                                    <div>
                                        <a href="tel:+916383286808">+91 63832 86808</a><br />
                                        <a href="tel:+919942720609">+91 99427 20609</a>
                                    </div>
                                </li>
                                <li>
                                    <MdEmail className="contact-icon" />
                                    <a href="mailto:seyontraders06@gmail.com">seyontraders06@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <p>© {new Date().getFullYear()} Seyon Traders. All Rights Reserved.</p>
                        <div className="footer-legal">
                            <Link to="/terms">Terms &amp; Conditions</Link>
                            <span>|</span>
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;