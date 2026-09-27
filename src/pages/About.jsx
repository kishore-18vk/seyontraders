import React from 'react';
import { Link } from 'react-router-dom';
import cocopeatOrganic from '../assets/products/cocopeat_block_organic.jpeg';
import './PageStyles.css';

const About = () => {
    const milestones = [
        { year: '2026', event: 'Seyon Traders founded in Kangayam, Tamil Nadu — a fresh start with big ambitions.' },
        { year: '2026', event: 'Launched our core product line: Cocopeat Blocks, Loose Coir Pith, Husk Chips & Coir Fibre.' },
        { year: '2026', event: 'Building our first distribution network across Tamil Nadu & India.' },
        { year: 'Target', event: 'Targeting worldwide export orders & global grower partnerships.' },
    ];

    return (
        <main className="page">
            {/* Page Hero */}
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--teal-dark) 0%, var(--green-deeper) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>WHO WE ARE</span>
                    <h1 className="page-hero-title">ABOUT US</h1>
                    <p className="page-hero-sub">A fresh start in 2026 — driven by quality, sustainability &amp; passion for coir.</p>
                </div>
            </section>

            {/* Story Split */}
            <section className="about-story">
                <div className="about-story-img" style={{ padding: 0, position: 'relative', overflow: 'hidden' }}>
                    <img
                        src={cocopeatOrganic}
                        alt="High Density Organic Coir Block"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '420px', display: 'block' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '24px',
                        background: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(8px)',
                        padding: '12px 20px',
                        borderRadius: '8px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}>
                        <strong style={{ display: 'block', color: 'var(--heading-color)', fontFamily: 'var(--font-heading)', fontSize: '1rem', letterSpacing: '1px' }}>
                            KANGAYAM COIR BELT
                        </strong>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-gray)' }}>
                            Direct sourcing from Tamil Nadu coconut plantations
                        </span>
                    </div>
                </div>
                <div className="about-story-content">
                    <span className="section-tag">OUR STORY</span>
                    <h2 className="section-title">A BOLD START IN 2026</h2>
                    <p className="section-desc">
                        Seyon Traders was founded in 2026 in Kangayam, Tamil Nadu, with a clear mission: to deliver premium quality coir products to growers and businesses across India and beyond.
                    </p>
                    <p className="about-text">
                        We are a new startup — fresh, focused, and driven by a genuine passion for sustainable coir products. While we are just getting started, our commitment to quality and customer satisfaction is unwavering from day one.
                    </p>
                    <p className="about-text">
                        Based in the heart of Tamil Nadu's coconut belt, we are perfectly positioned to source the finest raw coir and process it into world-class products — cocopeat, coir fibre, husk chips, and grow bags.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-num">2026</span>
                            <span className="highlight-label">Founded</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-num">4+</span>
                            <span className="highlight-label">Products</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-num">100%</span>
                            <span className="highlight-label">Natural</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header center visible" style={{ marginBottom: '56px', textAlign: 'center' }}>
                        <span className="section-tag">WHY CHOOSE US</span>
                        <h2 className="section-title">OUR VALUES</h2>
                    </div>
                    <div className="values-grid">
                        {[
                            { icon: '🌿', title: 'Sustainability', desc: 'We use 100% renewable coconut resources, ensuring minimal environmental impact in everything we do.' },
                            { icon: '⭐', title: 'Quality First', desc: 'Every product undergoes strict quality checks before export. We never compromise on standards.' },
                            { icon: '🤝', title: 'Partnership', desc: 'We work closely with each grower to understand their unique needs and provide tailored solutions.' },
                            { icon: '🌍', title: 'Growth Mindset', desc: 'We are a startup with big dreams — working every day to grow our reach from Tamil Nadu to markets across India and the world.' },
                        ].map((v, i) => (
                            <div key={i} className="value-card">
                                <div className="value-icon">{v.icon}</div>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section">
                <div className="container">
                    <div className="section-header center visible" style={{ marginBottom: '56px', textAlign: 'center' }}>
                        <span className="section-tag">MILESTONES</span>
                        <h2 className="section-title">OUR JOURNEY SO FAR</h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-dot" />
                                <div className="timeline-card">
                                    <span className="timeline-year">{m.year}</span>
                                    <p className="timeline-event">{m.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Startup CTA Banner */}
            <section className="values-section" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #e8f5ee 100%)' }}>
                <div className="container">
                    <div className="section-header center visible" style={{ marginBottom: '32px', textAlign: 'center' }}>
                        <span className="section-tag">JOIN OUR JOURNEY</span>
                        <h2 className="section-title">GROWING TOGETHER</h2>
                        <p className="section-desc" style={{ maxWidth: '640px', margin: '16px auto 0' }}>
                            We may be a new startup, but our products are built on the ancient wisdom of coir — one of India's most sustainable natural resources. We're looking for our first partners, distributors, and customers who believe in quality and sustainability.
                        </p>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                        <Link to="/contact" className="btn-primary">BE OUR FIRST PARTNER</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="page-cta">
                <div className="container">
                    <h2>Ready to Work With Us?</h2>
                    <p>We are open for inquiries, orders, and partnerships. Let's grow something great together.</p>
                    <Link to="/contact" className="btn-white">CONTACT US</Link>
                </div>
            </section>
        </main>
    );
};

export default About;
