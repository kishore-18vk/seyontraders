import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../assets/hero_banner.png';
import looseCocopeatHand from '../assets/products/loose_cocopeat_hand.jpeg';
import cocopeatExpanded from '../assets/products/cocopeat_block_expanded.jpeg';
import { productsData } from '../data/productsData';
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

    const stats = [
        { value: '2026', label: 'Year Founded' },
        { value: '5+', label: 'Products Available' },
        { value: '100%', label: 'Natural Products' },
        { value: '🌱', label: 'New & Growing' },
    ];

    const processSteps = [
        { step: '01', title: 'Sourcing', desc: 'We ethically source the finest coconut husks from trusted local farms in Tamil Nadu.' },
        { step: '02', title: 'Processing', desc: 'Raw husks are processed using modern machinery to produce consistent, clean quality.' },
        { step: '03', title: 'Testing', desc: 'Every batch undergoes rigorous quality checks for EC, pH, and moisture before packaging.' },
        { step: '04', title: 'Packaging', desc: 'Products are packed in compressed blocks, bales, or loose bags for worldwide distribution.' },
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
                    <span className="hero-tag">EST. 2026 · KANGAYAM, TAMIL NADU</span>
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
                                desc="We are a new enterprise launched in 2026, producing high quality coir products from Kangayam, Tamil Nadu. Our mission is simple: deliver the best natural coir products to growers and businesses."
                            />
                            <ul className="intro-features">
                                <li><span className="feature-dot" />New company — fresh, focused &amp; passionate</li>
                                <li><span className="feature-dot" />Premium quality coir products from Tamil Nadu</li>
                                <li><span className="feature-dot" />Sustainable, 100% natural manufacturing</li>
                                <li><span className="feature-dot" />Open for orders &amp; global partnerships</li>
                            </ul>
                            <Link to="/about" className="btn-primary" style={{ marginTop: '28px', display: 'inline-block' }}>OUR STORY</Link>
                        </div>
                        <div className="intro-right">
                            <div className="intro-img-stack">
                                <div className="intro-img-main">
                                    <img src={looseCocopeatHand} alt="Seyon Traders Coir Quality" className="intro-real-img" />
                                    <div className="intro-img-floating-tag">
                                        <span>🌿 100% Natural Substrate</span>
                                    </div>
                                </div>
                                <div className="intro-badge">
                                    <span className="badge-number">2026</span>
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
                    <img src={cocopeatExpanded} alt="Hydrated & Expanded Cocopeat" className="split-real-img" />
                    <div className="split-img-overlay" />
                    <div className="split-img-badge">
                        <span className="split-badge-num">5 : 1 Compression</span>
                        <span className="split-badge-text">Expands up to 75L of rich, airy growing medium</span>
                    </div>
                </div>
                <div className="split-content">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '4px' }}>WHAT WE DO</span>
                    <h2 className="split-title">QUALITY AT<br />EVERY STAGE</h2>
                    <p className="split-text">
                        At Seyon Traders, our core goal is to provide high quality coir products to help growers grow more ecologically and sustainably. We work hand-in-hand with growers worldwide to understand their unique needs.
                    </p>
                    <p className="split-text">
                        Our compressed cocopeat substrates are freshwater-washed and customised to suit each grower's EC, pH, and particle size requirements.
                    </p>
                    <Link to="/products" className="btn-white" style={{ marginTop: '28px', display: 'inline-block' }}>EXPLORE PRODUCTS</Link>
                </div>
            </section>

            {/* ─── Products ─── */}
            <section className="products-section">
                <div className="container">
                    <SectionHeader
                        tag="PREMIUM SUBSTRATES"
                        title="OUR PRODUCTS"
                        desc="Sourced directly from Kangayam, Tamil Nadu – freshwater-washed for commercial greenhouses, nurseries, and horticulture."
                        center
                    />
                    <div className="home-products-grid">
                        {productsData.map((p) => (
                            <div key={p.id} className="home-product-card">
                                <div className="home-prod-img-wrap">
                                    {p.badge && <span className="home-prod-badge">{p.badge}</span>}
                                    <img src={p.mainImage} alt={p.name} className="home-prod-img" loading="lazy" />
                                </div>
                                <div className="home-prod-body">
                                    <span className="home-prod-tag">{p.tag}</span>
                                    <h3 className="home-prod-title">{p.name}</h3>
                                    <p className="home-prod-desc">{p.desc.slice(0, 110)}...</p>
                                    <div className="home-prod-specs-chips">
                                        {p.specs.slice(0, 2).map((sp, idx) => (
                                            <span key={idx} className="spec-chip">
                                                {sp.label}: {sp.value}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="home-prod-footer">
                                        <Link to={`/products/${p.category}`} className="home-prod-link">
                                            VIEW DETAILS →
                                        </Link>
                                        <Link to={`/contact?product=${encodeURIComponent(p.name)}`} className="btn-primary" style={{ padding: '6px 14px', fontSize: '0.72rem' }}>
                                            ENQUIRE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/products" className="btn-primary">
                            VIEW FULL CATALOG &amp; SPECIFICATIONS →
                        </Link>
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
