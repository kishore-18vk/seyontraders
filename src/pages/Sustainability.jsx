import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Sustainability = () => {
    const points = [
        { emoji: '🌴', title: 'Renewable Raw Material', desc: 'All our products are made from coconut husks, a byproduct of coconut farming. No trees are cut. Every part of the coconut is used.' },
        { emoji: '♻️', title: 'Zero Waste Manufacturing', desc: 'We ensure that every part of the processed material is used, minimising waste and maximising resource efficiency.' },
        { emoji: '💧', title: 'Water Conservation', desc: 'Our processing units use water recycling systems to significantly reduce water consumption during washing and buffering stages.' },
        { emoji: '🌱', title: 'Soil-Free Growing', desc: 'Coir substrates enable hydroponics and soil-less growing, which uses up to 90% less water than conventional soil farming.' },
        { emoji: '🔋', title: 'Carbon Footprint', desc: 'We offset our logistics carbon footprint by supporting local tree-planting initiatives and using energy-efficient machinery.' },
        { emoji: '🤝', title: 'Farmer Welfare', desc: 'We pay fair prices to farmers and engage in community development programmes in the coconut-growing regions we source from.' },
    ];

    return (
        <main className="page">
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, #1a4a28 0%, var(--green-primary) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>PLANET FIRST</span>
                    <h1 className="page-hero-title">SUSTAINABILITY</h1>
                    <p className="page-hero-sub">We are committed to sustainable practices that protect the planet for future generations.</p>
                </div>
            </section>

            <section className="sustain-intro">
                <div className="container">
                    <div className="sustain-intro-grid">
                        <div>
                            <span className="section-tag">OUR COMMITMENT</span>
                            <h2 className="section-title">GROWING GREENER,<br />TOGETHER</h2>
                            <p className="section-desc">
                                At Seyon Traders, sustainability is not an afterthought – it is built into every aspect of our business. From the raw materials we source to the way we package and ship our products, we strive to make every decision with the planet in mind.
                            </p>
                            <p className="about-text" style={{ marginTop: '16px' }}>
                                Coir fibre is a completely natural, biodegradable, and renewable resource. By choosing Seyon Traders, our customers are already making a positive choice for the environment. We take that responsibility seriously and continue to improve our practices every year.
                            </p>
                        </div>
                        <div className="sustain-visual">
                            <div className="sustain-circle">
                                <span className="sustain-big-icon">🌿</span>
                                <span className="sustain-label">ECO-CERTIFIED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sustain-points-section">
                <div className="container">
                    <div className="sustain-points-grid">
                        {points.map((p, i) => (
                            <div key={i} className="sustain-point-card">
                                <div className="sustain-point-icon">{p.emoji}</div>
                                <h3 className="sustain-point-title">{p.title}</h3>
                                <p className="sustain-point-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-cta">
                <div className="container">
                    <h2>Join the Green Movement</h2>
                    <p>Partner with Seyon Traders and take a step towards sustainable, responsible crop growing.</p>
                    <Link to="/contact" className="btn-white">GET IN TOUCH</Link>
                </div>
            </section>
        </main>
    );
};

export default Sustainability;
