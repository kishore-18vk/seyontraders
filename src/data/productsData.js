// Real Products Data for Seyon Traders sourced directly from photos
import cocopeat5kg from '../assets/products/cocopeat_block_5kg.jpeg';
import cocopeatOrganic from '../assets/products/cocopeat_block_organic.jpeg';
import cocopeatExpanded from '../assets/products/cocopeat_block_expanded.jpeg';
import looseCoirPith from '../assets/products/loose_coir_pith.jpeg';
import looseCocopeatHand from '../assets/products/loose_cocopeat_hand.jpeg';
import coconutHuskChips from '../assets/products/coconut_husk_chips.jpeg';
import coirHuskChipsCut from '../assets/products/coir_husk_chips_cut.jpeg';
import huskChipBlock45kg from '../assets/products/husk_chip_block_4_5kg.jpeg';
import huskChipBlockExpanded from '../assets/products/husk_chip_block_expanded.jpeg';
import huskChipBlock10lb from '../assets/products/husk_chip_block_10lb.jpeg';
import naturalCoirFibre from '../assets/products/natural_coir_fibre.jpeg';

export const productsData = [
  {
    id: 'cocopeat-block-5kg',
    category: 'cocopeat',
    categoryLabel: 'Cocopeat Blocks',
    name: '5 KG Low EC Cocopeat Block',
    tag: 'HORTICULTURAL SUBSTRATE',
    badge: 'Best Seller',
    mainImage: cocopeat5kg,
    gallery: [
      { img: cocopeat5kg, label: '5 KG Low EC Cocopeat Block' },
      { img: cocopeatOrganic, label: 'High Density Organic Block' },
      { img: cocopeatExpanded, label: 'Hydrated & Expanded Cocopeat' }
    ],
    desc: 'Premium 5kg compressed cocopeat block with low electrical conductivity (EC < 0.5 mS/cm). Specially fresh-water washed to remove excess sodium and potassium salts. Expands up to 75 litres of rich growing substrate.',
  specs: [
    { label: 'Weight', value: '5 kg (± 300g)' },
    { label: 'Expanded Volume', value: '70 – 75 Litres' },
    { label: 'Electrical Conductivity (EC)', value: '< 0.5 – 0.8 mS/cm (Low EC)' },
    { label: 'pH Level', value: '5.5 – 6.8 (Neutral)' },
    { label: 'Compression Ratio', value: '5 : 1' },
    { label: 'Moisture Content', value: '< 15%' },
    { label: 'Screening', value: '6mm / 8mm mesh sieved' }
  ],
  features: [
    'Triple freshwater-washed to remove salt build-up',
    'Superior water retention holding 8-9 times dry weight',
    'Provides high cation exchange capacity (CEC)',
    '100% organic, weed-free, and pathogen-free',
    'Ideal for greenhouse hydroponics and soil amendment'
  ],
  applications: [
    'Greenhouse hydroponic crops (Tomatoes, Cucumbers, Capsicums)',
    'Horticultural nurseries & seedling trays',
    'Commercial soft fruits (Strawberries, Blueberries)',
    'Home potting soil mixes and landscaping'
  ]
  },
{
  id: 'loose-coir-pith',
    category: 'cocopeat',
      categoryLabel: 'Cocopeat / Coir Pith',
        name: 'Washed Loose Coir Pith',
          tag: 'HIGH-RETENTION GROWING MEDIUM',
            badge: 'Ready to Use',
              mainImage: looseCoirPith,
                gallery: [
                  { img: looseCoirPith, label: 'Washed Loose Coir Pith' },
                  { img: looseCocopeatHand, label: 'Fluffy Soil-Conditioning Texture' }
                ],
                  desc: 'Pure, fluffy, and naturally aged coir pith. Pre-washed and desalted, this organic substrate is ready for direct soil conditioning, seedling trays, and custom potting blends without needing pre-hydration.',
                    specs: [
                      { label: 'Form', value: 'Loose / Fluffy bulk substrate' },
                      { label: 'Water Retention', value: '8 – 10 times dry weight' },
                      { label: 'Air-Filled Porosity', value: '10% – 12%' },
                      { label: 'Cation Exchange (CEC)', value: '60 – 130 meq/100g' },
                      { label: 'pH Level', value: '5.6 – 6.6' },
                      { label: 'Purity', value: '100% natural, no additives' }
                    ],
                      features: [
                        'Uncompressed format ready for immediate blending',
                        'Maintains ideal moisture balance and prevents dry spots',
                        'Excellent buffer against plant water stress',
                        'Promotes rapid, unobstructed root spread',
                        'Improves physical structure of heavy clay soils'
                      ],
                        applications: [
                          'Custom potting soil formulations',
                          'Raised garden beds and urban terrace farming',
                          'Seed germination and vegetative propagation',
                          'Turf renovation, golf greens, and lawn conditioning'
                        ]
},
{
  id: 'coconut-husk-chips',
    category: 'husk-chips',
      categoryLabel: 'Husk Chips',
        name: 'Coconut Husk Chips (Mulch & Orchid Grade)',
          tag: 'AERATION & DRAINAGE SUBSTRATE',
            badge: 'Orchid Grade',
              mainImage: coconutHuskChips,
                gallery: [
                  { img: coconutHuskChips, label: 'Moist Coconut Husk Chips' },
                  { img: coirHuskChipsCut, label: 'Uniform Cut Husk Chunks' }
                ],
                  desc: 'Evenly cut chunks of fibrous coconut husks providing unmatched aeration and drainage. Outstanding resistance to compaction and fungal decomposition, lasting 3 to 5 years in plant root zones.',
                    specs: [
                      { label: 'Chip Sizing', value: '8–12mm (Medium) & 12–18mm (Coarse)' },
                      { label: 'Air-Filled Porosity', value: '30% – 45%' },
                      { label: 'pH Level', value: '5.6 – 6.5' },
                      { label: 'Durability', value: 'Lasts 3 to 5 years without breaking down' },
                      { label: 'Moisture Retention', value: 'Moderate retention with free drainage' },
                      { label: 'Origin', value: 'Kangayam, Tamil Nadu' }
                    ],
                      features: [
                        'Maximizes airflow to eliminate root rot risks',
                        'High natural lignin content resists rotting',
                        'Superior eco-friendly alternative to pine and fir bark',
                        'Acts as a premium protective landscaping mulch',
                        'Non-toxic and safe for vivariums and reptile bedding'
                      ],
                        applications: [
                          'Orchids, Anthuriums, Bromeliads & Epiphytes',
                          'Hydroponic drainage base layers in greenhouse slabs',
                          'Decorative ground mulch for gardens and parks',
                          'Reptile terrarium substrate and pet bedding'
                        ]
},
{
  id: 'husk-chip-block',
    category: 'husk-chips',
      categoryLabel: 'Husk Chips',
        name: '4.5 KG / 5 KG Coconut Husk Chip Block',
          tag: 'COMPRESSED HUSK SUBSTRATE',
            badge: 'High Expansion',
              mainImage: huskChipBlock45kg,
                gallery: [
                  { img: huskChipBlock45kg, label: '4.5 KG / 5 KG Husk Chip Block' },
                  { img: huskChipBlockExpanded, label: 'Expanded Husk Chips Substrate' },
                  { img: huskChipBlock10lb, label: 'Arcadia 10LB Husk Block' }
                ],
                  desc: 'Dense, compressed blocks of pure coconut husk chips. Specially engineered for efficient maritime shipping and storage. Reconstitutes quickly with water into 55–60 litres of breathable, chunky growing medium.',
                    specs: [
                      { label: 'Block Weight', value: '4.5 kg / 5 kg (10 LB)' },
                      { label: 'Expanded Volume', value: '55 – 60 Litres' },
                      { label: 'Composition', value: '100% Coconut Husk Chips' },
                      { label: 'Air-to-Water Ratio', value: 'Balanced aeration & drainage' },
                      { label: 'Salinity', value: 'Low EC washed grade' },
                      { label: 'Compression Ratio', value: '4 : 1' }
                    ],
                      features: [
                        'Economical freight packaging for bulk commercial use',
                        'Rehydrates rapidly upon water addition',
                        'Creates open, airy root zones for intensive cropping',
                        'Can be custom blended with cocopeat for hybrid substrates',
                        'Uniform chip density across every block'
                      ],
                        applications: [
                          'Commercial berry cultivation (Strawberries, Blueberries)',
                          'Greenhouse hydroponic bucket and pot systems',
                          'Tree planting and large ornamental containers',
                          'Soil aeration and compaction prevention'
                        ]
},
{
  id: 'natural-coir-fibre',
    category: 'coir-fibre',
      categoryLabel: 'Coir Fibre',
        name: 'Natural Golden Coir Fibre',
          tag: '100% ECO INDUSTRIAL MATERIAL',
            badge: 'Industrial Grade',
              mainImage: naturalCoirFibre,
                gallery: [
                  { img: naturalCoirFibre, label: 'Golden Brown Coir Fibre' }
                ],
                  desc: 'Strong, resilient golden brown coir fibres extracted from mature Tamil Nadu coconut husks. Esteemed for exceptional tensile strength, rot resistance, natural elasticity, and long-term durability in industrial and agricultural uses.',
                    specs: [
                      { label: 'Fibre Length', value: '10cm – 25cm (Long & Medium staple)' },
                      { label: 'Colour', value: 'Natural Golden Brown' },
                      { label: 'Moisture Content', value: '< 15%' },
                      { label: 'Impurity / Dust', value: '< 3%' },
                      { label: 'Bale Weight', value: '100 kg – 125 kg hydraulic compressed' },
                      { label: 'Origin', value: 'Kangayam, Tamil Nadu' }
                    ],
                      features: [
                        'Naturally high tensile strength and elasticity',
                        'Impervious to saltwater, weather, and fungal attack',
                        '100% biodegradable and sustainable raw material',
                        'Excellent thermal and acoustic insulation qualities',
                        'Ethically extracted with zero toxic chemicals'
                      ],
                        applications: [
                          'Erosion control geotextiles & coir blankets',
                          'Coir ropes, twines, cords & yarn spinning',
                          'Rubberized coir mattresses and automotive seating',
                          'Door mats, floor coverings & horticultural moss poles'
                        ]
}
];

export const getProductById = (id) => productsData.find(p => p.id === id);
