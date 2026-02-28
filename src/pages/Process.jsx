import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const processSteps = [
    {
        num: '01',
        title: 'RAW MATERIAL SOURCING',
        desc: 'We ethically source mature coconut husks directly from trusted farmers and cooperatives across Tamil Nadu and Kerala. Our strong farmer relationships ensure consistent quality and supply throughout the year.',
        icon: '🥥',
    },
    {
        num: '02',
        title: 'DEFIBERING & SCREENING',
        desc: 'The husks go through a defibering machine that separates the long fibres from the coir pith (cocopeat). The material is then screened to remove impurities and to achieve the desired particle size.',
        icon: '⚙️',
    },
    {
        num: '03',
        title: 'WASHING & BUFFERING',
        desc: 'Cocopeat is washed multiple times to remove excess salts and then buffered with calcium nitrate to ensure optimal EC and pH levels suitable for growing applications.',
        icon: '💧',
    },
    {
        num: '04',
        title: 'DRYING',
        desc: 'Material is sun-dried and mechanically dried to achieve the target moisture content, ensuring product stability and preventing microbial growth during storage and transport.',
        icon: '☀️',
    },
    {
        num: '05',
        title: 'QUALITY TESTING',
        desc: 'Every batch is tested in our in-house lab for EC, pH, moisture content, and wettability before being approved for packaging. We never ship without quality clearance.',
        icon: '🔬',
    },
    {
        num: '06',
        title: 'COMPRESSION & PACKAGING',
        desc: 'Products are compressed into blocks, bales, or filled into grow bags as per customer specification and packed in HDPE bags or PP woven bags for safe sea or air freight.',
        icon: '📦',
    },
];

const Process = () => {
    return (
        <main className="page">
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--green-deeper) 0%, var(--heading-color) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>HOW WE WORK</span>
                    <h1 className="page-hero-title">OUR PROCESS</h1>
                    <p className="page-hero-sub">From coconut husk to premium growing substrate – handled with care at every step.</p>
                </div>
            </section>

            <section className="process-page-section">
                <div className="container">
                    <div className="process-full-steps">
                        {processSteps.map((s, i) => (
                            <div key={i} className={`process-full-item ${i % 2 === 1 ? 'reverse' : ''}`}>
                                <div className="process-full-visual">
                                    <div className="process-full-num">{s.num}</div>
                                    <div className="process-full-emoji">{s.icon}</div>
                                </div>
                                <div className="process-full-content">
                                    <h3 className="process-full-title">{s.title}</h3>
                                    <p className="process-full-desc">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-cta">
                <div className="container">
                    <h2>See It Yourself</h2>
                    <p>Interested in visiting our facility or learning more about our process? Get in touch with us.</p>
                    <Link to="/contact" className="btn-white">CONTACT US</Link>
                </div>
            </section>
        </main>
    );
};

export default Process;
