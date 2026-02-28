import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdPhone, MdEmail, MdPlace, MdSend } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './PageStyles.css';

// ─── EmailJS Config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up FREE with seyontraders06@gmail.com
// 2. Add a Gmail service → copy the Service ID below
// 3. Create an Email Template → copy the Template ID below
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. service_abc123
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. template_xyz456
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. abcDEFghiJKL
// ─────────────────────────────────────────────────────────────────

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleChange = (ev) => setForm({ ...form, [ev.target.name]: ev.target.value });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length > 0) { setErrors(e); return; }
        setErrors({});
        setSending(true);
        setSendError('');

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone || 'Not provided',
            subject: form.subject || 'New Enquiry from Website',
            message: form.message,
            to_email: 'seyontraders06@gmail.com',
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
        } catch (err) {
            console.error('EmailJS error:', err);
            setSendError('Failed to send message. Please call us directly or email seyontraders06@gmail.com');
        } finally {
            setSending(false);
        }
    };

    return (
        <main className="page">
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--green-deeper) 0%, var(--teal-dark) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>REACH OUT</span>
                    <h1 className="page-hero-title">CONTACT US</h1>
                    <p className="page-hero-sub">We'd love to hear from you. Drop us a message and we'll get back to you shortly.</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* ── Info Panel ── */}
                        <div className="contact-info">
                            <h2 className="contact-info-title">GET IN TOUCH</h2>
                            <p className="contact-info-desc">
                                Whether you're looking for bulk orders, product information, or just want to say hello – we're here to help.
                            </p>
                            <div className="contact-info-items">

                                {/* Address */}
                                <div className="contact-info-item">
                                    <div className="ci-icon"><MdPlace /></div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>
                                            D.No.10/362, Sikkarasampalayam,<br />
                                            Maruduraiyanvalasu (Po), Sivanmalai Village,<br />
                                            Kangayam – 638 701,<br />
                                            Tirupur Dist., Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone – two numbers */}
                                <div className="contact-info-item">
                                    <div className="ci-icon"><MdPhone /></div>
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+916383286808">+91 63832 86808</a><br />
                                        <a href="tel:+919942720609">+91 99427 20609</a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="contact-info-item">
                                    <div className="ci-icon"><MdEmail /></div>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:seyontraders06@gmail.com">seyontraders06@gmail.com</a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="contact-info-item">
                                    <div className="ci-icon" style={{ background: '#25D366' }}>
                                        <FaWhatsapp style={{ color: '#fff' }} />
                                    </div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <a href="https://wa.me/916383286808" target="_blank" rel="noreferrer">Chat with us</a>
                                    </div>
                                </div>
                            </div>

                            <div className="business-hours">
                                <h4>Business Hours</h4>
                                <p>Monday – Saturday: 9:00 AM – 6:00 PM (IST)</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        {/* ── Contact Form ── */}
                        <div className="contact-form-wrap">
                            {submitted ? (
                                <div className="form-success">
                                    <div className="success-icon">✅</div>
                                    <h3>Message Sent!</h3>
                                    <p>Your message has been delivered directly to <strong>seyontraders06@gmail.com</strong>. We'll get back to you within 24 business hours.</p>
                                    <button className="btn-primary" onClick={() => {
                                        setSubmitted(false);
                                        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                                    }}>
                                        SEND ANOTHER
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                    <h3 className="form-title">SEND A MESSAGE</h3>
                                    <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
                                        Message goes directly to <strong>seyontraders06@gmail.com</strong>
                                    </p>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                                                placeholder="Your Name" className={errors.name ? 'error' : ''} />
                                            {errors.name && <span className="form-error">{errors.name}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                                                placeholder="you@example.com" className={errors.email ? 'error' : ''} />
                                            {errors.email && <span className="form-error">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                                                placeholder="+91 XXXXX XXXXX" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                                                placeholder="Product Enquiry" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange}
                                            placeholder="Tell us about your requirements..."
                                            className={errors.message ? 'error' : ''} />
                                        {errors.message && <span className="form-error">{errors.message}</span>}
                                    </div>

                                    {sendError && (
                                        <div style={{
                                            background: '#fff3f3', border: '1px solid #f88', borderRadius: '8px',
                                            padding: '12px 16px', marginBottom: '16px', color: '#c00', fontSize: '0.85rem'
                                        }}>
                                            ⚠️ {sendError}
                                        </div>
                                    )}

                                    <button type="submit" className="btn-primary form-submit-btn" disabled={sending}
                                        style={{ opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer' }}>
                                        <MdSend style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                        {sending ? 'SENDING...' : 'SEND MESSAGE'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <div className="map-placeholder">
                <div className="map-overlay">
                    <span>📍 Kangayam, Tirupur Dist., Tamil Nadu – 638 701</span>
                    <p>D.No.10/362, Sikkarasampalayam, Maruduraiyanvalasu (Po), Sivanmalai Village</p>
                </div>
            </div>
        </main>
    );
};

export default Contact;
