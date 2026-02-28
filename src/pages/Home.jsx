import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../assets/hero_banner.png';
import './Home.css';

/* ── Scroll-reveal hook ── */
const useInView = (threshold = 0.15) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
};

/* ── Product / Crop Card ── */
const Card = ({ icon, title, link, delay = 0 }) => {
    const [ref, visible] = useInView();
    return (
        <div
            ref={ref}
            className={`card ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="card-icon">{icon}</div>
            <h4 className="card-title">{title}</h4>
            <Link to={link} className="card-link">VIEW →</Link>
        </div>
    );
};

/* ── Section Header ── */
const SectionHeader = ({ tag, title, desc, center = false }) => {
    const [ref, visible] = useInView();
    return (
        <div ref={ref} className={`section-header ${visible ? 'visible' : ''} ${center ? 'center' : ''}`}>
            {tag && <span className="section-tag">{tag}</span>}
            <h2 className="section-title">{title}</h2>
            {desc && <p className="section-desc">{desc}</p>}
        </div>
    );
};

const Home = () => {
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

    const [statsRef, statsVisible] = useInView();
    const [splitRef, splitVisible] = useInView();
    const [certRef, certVisible] = useInView();

    /* ── Data ── */
    const products = [
        {
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                    <rect x="8" y="20" width="48" height="28" rx="3" fill="#2dba6e" fillOpacity="0.15" stroke="#2dba6e" strokeWidth="2" />
                    <path d="M16 20V16C16 12.7 18.7 10 22 10H42C45.3 10 48 12.7 48 16V20" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <rect x="24" y="28" width="16" height="12" rx="2" fill="#2dba6e" />
                    <line x1="32" y1="48" x2="32" y2="56" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="56" x2="44" y2="56" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Coir Pith / Cocopeat',
            link: '/products/cocopeat',
        },
        {
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                    <path d="M8 48 Q20 20 32 32 Q44 44 56 16" stroke="#2dba6e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <circle cx="12" cy="44" r="4" fill="#2dba6e" fillOpacity="0.2" stroke="#2dba6e" strokeWidth="1.5" />
                    <circle cx="32" cy="32" r="4" fill="#2dba6e" fillOpacity="0.2" stroke="#2dba6e" strokeWidth="1.5" />
                    <circle cx="52" cy="20" r="4" fill="#2dba6e" fillOpacity="0.2" stroke="#2dba6e" strokeWidth="1.5" />
                </svg>
            ),
            title: 'Coir Fibre',
            link: '/products/coir-fibre',
        },
        {
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                    <circle cx="32" cy="32" r="22" fill="#2dba6e" fillOpacity="0.1" stroke="#2dba6e" strokeWidth="2" />
                    <circle cx="32" cy="32" r="12" fill="#2dba6e" fillOpacity="0.2" stroke="#2dba6e" strokeWidth="1.5" />
                    <circle cx="32" cy="32" r="4" fill="#2dba6e" />
                    <line x1="32" y1="10" x2="32" y2="20" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <line x1="32" y1="44" x2="32" y2="54" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <line x1="10" y1="32" x2="20" y2="32" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <line x1="44" y1="32" x2="54" y2="32" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Husk Chips',
            link: '/products/husk-chips',
        },
        {
            icon: (
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                    <rect x="12" y="28" width="40" height="24" rx="3" fill="#2dba6e" fillOpacity="0.15" stroke="#2dba6e" strokeWidth="2" />
                    <path d="M20 28V20C20 16.7 22.7 14 26 14H30" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <path d="M30 14C30 14 38 12 38 20C38 24 36 26 34 27" stroke="#2dba6e" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="36" x2="52" y2="36" stroke="#2dba6e" strokeWidth="1.5" strokeDasharray="4 3" />
                </svg>
            ),
            title: 'Grow Bags',
            link: '/products/grow-bags',
        },
    ];

    const crops = [
        { label: 'Tomato', emoji: '🍅', sub: 'Vegetables' },
        { label: 'Bell Pepper', emoji: '🫑', sub: 'Vegetables' },
        { label: 'Cucumber', emoji: '🥒', sub: 'Vegetables' },
        { label: 'Strawberry', emoji: '🍓', sub: 'Soft Fruits' },
        { label: 'Blueberry', emoji: '🫐', sub: 'Soft Fruits' },
        { label: 'Rose', emoji: '🌹', sub: 'Floriculture' },
    ];

    const stats = [
        { value: '2025', label: 'Year Founded' },
        { value: '4+', label: 'Products Available' },
        { value: '100%', label: 'Natural Products' },
        { value: '🌱', label: 'New & Growing' },
    ];

    const processSteps = [
        { step: '01', title: 'Sourcing', desc: 'We ethically source the finest coconut husks from trusted local farms.' },
        { step: '02', title: 'Processing', desc: 'Raw husks are processed using modern machinery to produce consistent quality.' },
        { step: '03', title: 'Testing', desc: 'Every batch undergoes rigorous quality checks before packaging.' },
        { step: '04', title: 'Packaging', desc: 'Products are packed in the required formats and exported worldwide.' },
    ];

    return (
        <main className="home">
            {/* ─── Hero ─── */}
            <section className="hero">
                <div className="hero-img-wrap">
                    <img src={heroBanner} alt="Seyon Traders – Coir Products" className="hero-img" />
                    <div className="hero-overlay" />
                </div>
                <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
                    <span className="hero-tag">EST. 2025 · KANGAYAM, TAMIL NADU</span>
                    <h1 className="hero-title">
                        GROWING WITH<br /><span>SEYON TRADERS</span>
                    </h1>
                    <p className="hero-sub">
                        Premium coir products &amp; sustainable growing solutions<br />for crop growers across the world.
                    </p>
                    <div className="hero-btns">
                        <Link to="/products" className="btn-white">OUR PRODUCTS</Link>
                        <Link to="/contact" className="btn-outline-white">GET IN TOUCH</Link>
                    </div>
                </div>
                <div className="hero-scroll-hint">
                    <div className="scroll-line" />
                    <span>SCROLL</span>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="stats-bar">
                <div
                    ref={statsRef}
                    className={`stats-grid ${statsVisible ? 'visible' : ''}`}
                >
                    {stats.map((s, i) => (
                        <div key={i} className="stat-item" style={{ transitionDelay: `${i * 120}ms` }}>
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── Intro / About ─── */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-left">
                            <SectionHeader
                                tag="WHO WE ARE"
                                title="GROWING WITH SEYON"
                                desc="We are a new startup launched in 2025, producing high quality coir products from Kangayam, Tamil Nadu. Our mission is simple: deliver the best natural coir products to growers and businesses."
                            />
                            <ul className="intro-features">
                                <li><span className="feature-dot" />New startup — fresh, focused & passionate</li>
                                <li><span className="feature-dot" />Premium quality coir products from Tamil Nadu</li>
                                <li><span className="feature-dot" />Sustainable, 100% natural manufacturing</li>
                                <li><span className="feature-dot" />Open for first orders & partnerships</li>
                            </ul>
                            <Link to="/about" className="btn-primary" style={{ marginTop: '28px', display: 'inline-block' }}>OUR STORY</Link>
                        </div>
                        <div className="intro-right">
                            <div className="intro-img-stack">
                                <div className="intro-img-main">
                                    <div className="intro-img-placeholder">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <circle cx="40" cy="40" r="38" fill="#e8f5ee" />
                                            <path d="M40 14C40 14 24 30 24 44C24 52.8 31.2 60 40 60C48.8 60 56 52.8 56 44C56 30 40 14 40 14Z" fill="#2dba6e" fillOpacity="0.7" />
                                            <path d="M40 26C40 26 32 36 32 44C32 48.4 35.6 52 40 52C44.4 52 48 48.4 48 44C48 36 40 26 40 26Z" fill="#155c35" />
                                        </svg>
                                        <p>Premium Coir Products</p>
                                    </div>
                                </div>
                                <div className="intro-badge">
                                    <span className="badge-number">2025</span>
                                    <span className="badge-text">Founded in Tamil Nadu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── What We Do – split ─── */}
            <section ref={splitRef} className={`split-section ${splitVisible ? 'visible' : ''}`}>
                <div className="split-img">
                    <div className="split-img-inner">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <circle cx="50" cy="50" r="48" fill="#d4edda" />
                            <path d="M50 15C50 15 30 35 30 52C30 63 39 72 50 72C61 72 70 63 70 52C70 35 50 15 50 15Z" fill="#2dba6e" fillOpacity="0.8" />
                            <path d="M50 30C50 30 40 45 40 55C40 60.5 44.5 65 50 65C55.5 65 60 60.5 60 55C60 45 50 30 50 30Z" fill="#155c35" />
                        </svg>
                        <h3>Pure &amp; Natural</h3>
                        <p>100% renewable coconut fibre products</p>
                    </div>
                </div>
                <div className="split-content">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '4px' }}>WHAT WE DO</span>
                    <h2 className="split-title">QUALITY AT<br />EVERY STAGE</h2>
                    <p className="split-text">
                        At Seyon Traders, our core goal is to provide high quality coir products to help growers grow more ecologically and sustainably. We work hand-in-hand with growers worldwide to understand their unique needs.
                    </p>
                    <p className="split-text">
                        Our compressed cocopeat substrates are customised to suit each grower's individual requirements and our team is available for guidance on the best possible growing solutions.
                    </p>
                    <Link to="/products" className="btn-white" style={{ marginTop: '28px', display: 'inline-block' }}>EXPLORE PRODUCTS</Link>
                </div>
            </section>

            {/* ─── Products ─── */}
            <section className="products-section">
                <div className="container">
                    <SectionHeader
                        tag="PACKING FORMATS"
                        title="OUR PRODUCTS"
                        desc="Our products are packaged in varied formats to best suit your environment and the needs of your crops."
                        center
                    />
                    <div className="cards-grid products-grid">
                        {products.map((p, i) => (
                            <Card key={p.title} icon={p.icon} title={p.title} link={p.link} delay={i * 100} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Crops ─── */}
            <section className="crops-section">
                <div className="container">
                    <SectionHeader
                        tag="SUITABLE CROPS"
                        title="TAILOR-MADE FOR YOUR CROPS"
                        desc="Our substrates are tailor-made for the needs of each crop. Drop us a message for any specialised requirements."
                        center
                    />
                    <div className="cards-grid crops-grid">
                        {crops.map((c, i) => (
                            <div
                                key={c.label}
                                className="crop-card"
                                style={{ animationDelay: `${i * 80}ms` }}
                            >
                                <div className="crop-emoji">{c.emoji}</div>
                                <span className="crop-sub">{c.sub}</span>
                                <h4 className="crop-label">{c.label}</h4>
                                <Link to={`/crops/${c.label.toLowerCase().replace(' ', '-')}`} className="btn-outline" style={{ marginTop: '14px', padding: '8px 20px', fontSize: '0.75rem' }}>
                                    VIEW
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Process ─── */}
            <section className="process-section">
                <div className="container">
                    <SectionHeader
                        tag="HOW WE WORK"
                        title="OUR PROCESS"
                        desc="From raw coconut husks to premium growing substrates – every step handled with care."
                        center
                    />
                    <div className="process-steps">
                        {processSteps.map((s, i) => (
                            <div key={i} className="process-step">
                                <div className="step-num">{s.step}</div>
                                {i < processSteps.length - 1 && <div className="step-connector" />}
                                <div className="step-body">
                                    <h4 className="step-title">{s.title}</h4>
                                    <p className="step-desc">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Why Choose Us (Startup) ─── */}
            <section ref={certRef} className={`cert-section ${certVisible ? 'visible' : ''}`}>
                <div className="container">
                    <SectionHeader tag="WHY SEYON TRADERS" title="OUR PROMISE" center />
                    <div className="cert-logos">
                        {[
                            { icon: '🌿', label: '100% Natural' },
                            { icon: '🏭', label: 'Direct from Source' },
                            { icon: '📦', label: 'Custom Orders' },
                            { icon: '🤝', label: 'Honest Pricing' },
                            { icon: '🚀', label: 'New & Growing' },
                        ].map((c, i) => (
                            <div key={i} className="cert-badge" style={{ transitionDelay: `${i * 100}ms` }}>
                                <div className="cert-icon" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {c.icon}
                                </div>
                                <span className="cert-name">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
