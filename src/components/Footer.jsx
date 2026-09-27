import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import seyonLogo from '../assets/seyon_logo.jpg';
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
                                <img src={seyonLogo} alt="Seyon Traders Logo" className="footer-logo-img" />
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
                                <li><Link to="/products/cocopeat">5 KG Cocopeat Block</Link></li>
                                <li><Link to="/products/cocopeat">Washed Loose Coir Pith</Link></li>
                                <li><Link to="/products/husk-chips">Coconut Husk Chips</Link></li>
                                <li><Link to="/products/husk-chips">Husk Chip Block (4.5kg)</Link></li>
                                <li><Link to="/products/coir-fibre">Natural Golden Coir Fibre</Link></li>
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