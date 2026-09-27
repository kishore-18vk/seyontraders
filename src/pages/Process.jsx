import React from 'react';
import { Link } from 'react-router-dom';
import naturalCoirFibre from '../assets/products/natural_coir_fibre.jpeg';
import coirHuskChipsCut from '../assets/products/coir_husk_chips_cut.jpeg';
import looseCocopeatHand from '../assets/products/loose_cocopeat_hand.jpeg';
import coconutHuskChips from '../assets/products/coconut_husk_chips.jpeg';
import cocopeatExpanded from '../assets/products/cocopeat_block_expanded.jpeg';
import cocopeat5kg from '../assets/products/cocopeat_block_5kg.jpeg';
import './PageStyles.css';

const processSteps = [
    {
        num: '01',
        title: 'RAW MATERIAL SOURCING',
        desc: 'We ethically source mature coconut husks directly from trusted farmers and cooperatives across Tamil Nadu. Our local Kangayam roots ensure fresh, non-saline husks of consistent quality all year round.',
        img: naturalCoirFibre,
    },
    {
        num: '02',
        title: 'DEFIBERING & SCREENING',
        desc: 'The husks go through modern defibering machines separating golden coir fibre from coir pith (cocopeat). Vibratory sieves filter out sand and short fibres according to exact mesh specifications.',
        img: coirHuskChipsCut,
    },
    {
        num: '03',
        title: 'WASHING & BUFFERING',
        desc: 'Cocopeat is washed multiple times with fresh water to desalt and remove excess sodium and potassium ions, achieving electrical conductivity (EC) below 0.5 mS/cm and a neutral pH of 5.5–6.8.',
        img: looseCocopeatHand,
    },
    {
        num: '04',
        title: 'SUN DRYING & CURING',
        desc: 'Substrates are sun-dried on clean concrete drying yards under Tamil Nadu sunshine until moisture drops below 15%, ensuring long-term product stability and eliminating bacterial growth.',
        img: coconutHuskChips,
    },
    {
        num: '05',
        title: 'LAB TESTING & INSPECTION',
        desc: 'Every production batch is tested in-house for EC (salinity), pH, expansion ratio, weed-seed absence, and air-filled porosity before receiving quality certification.',
        img: cocopeatExpanded,
    },
    {
        num: '06',
        title: 'HYDRAULIC COMPRESSION & EXPORT PACKING',
        desc: 'Material is compressed at 5:1 ratio into 5kg blocks, 4.5kg husk blocks, or loose poly-sacks with custom palletising and shrink-wrapping for secure maritime shipping worldwide.',
        img: cocopeat5kg,
    },
];

const Process = () => {
    return (
        <main className="page">
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--green-deeper) 0%, var(--heading-color) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>HOW WE WORK</span>
                    <h1 className="page-hero-title">OUR PROCESS</h1>
                    <p className="page-hero-sub">From Tamil Nadu coconut husk to premium growing substrate – handled with care at every step.</p>
                </div>
            </section>

            <section className="process-page-section">
                <div className="container">
                    <div className="process-full-steps">
                        {processSteps.map((s, i) => (
                            <div key={i} className={`process-full-item ${i % 2 === 1 ? 'reverse' : ''}`}>
                                <div className="process-full-visual">
                                    <span className="process-step-num-pill">{s.num}</span>
                                    <img src={s.img} alt={s.title} className="process-step-img" loading="lazy" />
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
