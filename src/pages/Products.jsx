import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsData } from '../data/productsData';
import './PageStyles.css';

const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'cocopeat', label: 'Cocopeat & Coir Pith' },
    { key: 'husk-chips', label: 'Husk Chips' },
    { key: 'coir-fibre', label: 'Coir Fibre' }
];

const ProductCard = ({ product, index }) => {
    const [activeImg, setActiveImg] = useState(product.mainImage);

    // Keep active image in sync if product prop updates
    useEffect(() => {
        setActiveImg(product.mainImage);
    }, [product]);

    return (
        <div className={`product-full-card ${index % 2 === 1 ? 'reverse' : ''}`} id={product.id}>
            {/* Visual & Gallery */}
            <div className="product-visual-wrapper">
                <div className="product-visual-main">
                    {product.badge && <span className="product-badge-pill">{product.badge}</span>}
                    <img src={activeImg} alt={product.name} className="product-image-img" loading="lazy" />
                </div>
                {product.gallery && product.gallery.length > 1 && (
                    <div className="product-thumbs-strip">
                        {product.gallery.map((item, gIdx) => (
                            <button
                                key={gIdx}
                                type="button"
                                className={`product-thumb-btn ${activeImg === item.img ? 'active' : ''}`}
                                onClick={() => setActiveImg(item.img)}
                                title={item.label}
                                aria-label={`View ${item.label}`}
                            >
                                <img src={item.img} alt={item.label} />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Info & Details */}
            <div className="product-info">
                <div className="product-header-tags">
                    <span className="section-tag">{product.tag}</span>
                    <span className="product-cat-label">{product.categoryLabel}</span>
                </div>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.desc}</p>

                {/* Technical Specifications */}
                {product.specs && product.specs.length > 0 && (
                    <div className="product-specs-card">
                        <h4 className="specs-card-title">Technical Specifications</h4>
                        <div className="specs-card-grid">
                            {product.specs.map((sp, sIdx) => (
                                <div key={sIdx} className="spec-row-item">
                                    <span className="spec-item-label">{sp.label}</span>
                                    <span className="spec-item-value">{sp.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Advantages */}
                {product.features && product.features.length > 0 && (
                    <div className="product-features-box">
                        <h4 className="features-box-title">Key Advantages</h4>
                        <ul className="product-features">
                            {product.features.map((f, fi) => (
                                <li key={fi}><span className="feat-dot" />{f}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Applications */}
                {product.applications && product.applications.length > 0 && (
                    <div className="product-applications-box">
                        <h4 className="apps-box-title">Recommended Applications</h4>
                        <div className="apps-tags-wrap">
                            {product.applications.map((app, aIdx) => (
                                <span key={aIdx} className="app-tag-pill">{app}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="product-action-bar">
                    <Link
                        to={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="btn-primary"
                        style={{ display: 'inline-block' }}
                    >
                        ENQUIRE ABOUT THIS PRODUCT
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const { productId } = useParams();
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        if (productId) {
            // Check if matches category
            const validCategory = categories.find(c => c.key === productId);
            if (validCategory) {
                setActiveCategory(productId);
            } else {
                // If it matches a specific product id, find its category
                const product = productsData.find(p => p.id === productId);
                if (product) {
                    setActiveCategory(product.category);
                    setTimeout(() => {
                        const el = document.getElementById(productId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                }
            }
        }
    }, [productId]);

    const filteredProducts = activeCategory === 'all'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    const getCategoryCount = (key) => {
        if (key === 'all') return productsData.length;
        return productsData.filter(p => p.category === key).length;
    };

    return (
        <main className="page">
            {/* Hero */}
            <section className="page-hero" style={{ background: 'linear-gradient(135deg, var(--heading-color) 0%, var(--green-deeper) 100%)' }}>
                <div className="container">
                    <span className="section-tag" style={{ color: 'rgba(255,255,255,0.65)' }}>SOURCED FROM TAMIL NADU HUSKS</span>
                    <h1 className="page-hero-title">OUR PRODUCTS</h1>
                    <p className="page-hero-sub">100% natural, fresh-water washed coir substrates for greenhouse growers, nurseries, and global industries.</p>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-page-section">
                <div className="container">
                    {/* Category Filter Tabs */}
                    <div className="product-category-filters">
                        {categories.map(c => (
                            <button
                                key={c.key}
                                type="button"
                                className={`filter-tab-btn ${activeCategory === c.key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(c.key)}
                            >
                                {c.label}
                                <span className="filter-count-badge">{getCategoryCount(c.key)}</span>
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="products-full-grid">
                        {filteredProducts.map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="page-cta">
                <div className="container">
                    <h2>Need Custom Bulk Substrates or Export Packaging?</h2>
                    <p>We provide containerised shipments, private labelling, and custom EC / sieving specifications tailored to your greenhouse or distribution needs.</p>
                    <Link to="/contact" className="btn-white">REQUEST A QUOTE</Link>
                </div>
            </section>
        </main>
    );
};

export default Products;
