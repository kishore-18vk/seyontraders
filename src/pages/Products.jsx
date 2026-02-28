import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const productsData = [
    {
        id: 'cocopeat',
        name: 'Coir Pith / Cocopeat',
        tag: 'GROWING MEDIUM',
        desc: 'Premium cocopeat blocks and loose pith, ideal for horticulture, hydroponics, and soil amendment. Our cocopeat has a neutral pH, excellent water retention, and high cation exchange capacity.',
        features: ['EC < 1.0 mS/cm', 'pH 5.5–6.8', 'High water retention', 'Available in 5kg & 25kg blocks'],
        emoji: '🥥',
    },
    {
        id: 'coir-fibre',
        name: 'Coir Fibre',
        tag: 'RAW MATERIAL',
        desc: 'High-quality coir fibre sourced from mature coconut husks. Used widely in mattress, rope, carpet, erosion control, and horticulture applications worldwide.',
        features: ['Brown & white varieties', 'Long staple length', 'High tensile strength', 'Moisture resistant'],
        emoji: '🌿',
    },
    {
        id: 'husk-chips',
        name: 'Husk Chips',
        tag: 'SUBSTRATE',
        desc: 'Coarse coir husk chips that provide excellent aeration and drainage for orchids, anthuriums, and tropical plants. A sustainable alternative to bark substrates.',
        features: ['Natural aeration', 'High lignin content', 'Long-lasting', 'pH buffered'],
        emoji: '🪵',
    },
    {
        id: 'grow-bags',
        name: 'Grow Bags',
        tag: 'COMPLETE SOLUTION',
        desc: 'Ready-to-use grow bags pre-filled with buffered cocopeat substrate for tomatoes, peppers, cucumbers, and strawberries. Custom sizes available on request.',
        features: ['Pre-buffered substrate', 'Customised dimensions', 'UV-resistant bags', 'Drip-ready'],
        emoji: '🌱',
    },
];

const Products = () => {
    return (
        <main className="page">
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--heading-color) 0%, var(--green-deeper) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>WHAT WE OFFER</span>
                    <h1 className="page-hero-title">OUR PRODUCTS</h1>
                    <p className="page-hero-sub">Premium coir substrates for sustainable crop growing worldwide.</p>
                </div>
            </section>

            <section className="products-page-section">
                <div className="container">
                    <div className="products-full-grid">
                        {productsData.map((p, i) => (
                            <div
                                key={p.id}
                                className={`product-full-card ${i % 2 === 1 ? 'reverse' : ''}`}
                            >
                                <div className="product-visual">
                                    <div className="product-visual-inner">
                                        <span className="product-big-emoji">{p.emoji}</span>
                                        <span className="product-big-tag">{p.tag}</span>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <span className="section-tag">{p.tag}</span>
                                    <h2 className="product-name">{p.name}</h2>
                                    <p className="product-desc">{p.desc}</p>
                                    <ul className="product-features">
                                        {p.features.map((f, fi) => (
                                            <li key={fi}><span className="feat-dot" />{f}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
                                        ENQUIRE NOW
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="page-cta">
                <div className="container">
                    <h2>Need a Custom Order?</h2>
                    <p>We offer tailored packaging and substrate blends for large-scale growers and distributors.</p>
                    <Link to="/contact" className="btn-white">CONTACT US</Link>
                </div>
            </section>
        </main>
    );
};

export default Products;
