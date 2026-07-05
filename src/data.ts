import { Model, Garment } from './types';

export const MODELS: Model[] = [
  {
    id: 'mia',
    name: 'Mia',
    gender: 'female',
    avatarUrl: '/src/assets/images/model_base_female_1783242314425.jpg',
    description: 'Athletic, modern silhouette'
  },
  {
    id: 'liam',
    name: 'Liam',
    gender: 'male',
    avatarUrl: '/src/assets/images/model_base_male_1783242354800.jpg',
    description: 'Sharp, elegant tailored physique'
  }
];

export const GARMENTS: Record<string, Garment[]> = {
  mia: [
    {
      id: 'cyber-hoodie-mia',
      name: 'Valkyrie Cyber Hoodie',
      category: 'Outerwear',
      brand: 'NEOTYPE™',
      garmentUrl: '/src/assets/images/garment_cyber_hoodie_1783242326752.jpg',
      resultUrl: '/src/assets/images/tryon_result_cyber_1783242341775.jpg',
      accentColor: '#a855f7', // Purple
      description: 'Futuristic technical fabric with active luminescent neon purple lines and weather-sealed seams.'
    }
  ],
  liam: [
    {
      id: 'velvet-blazer-liam',
      name: 'Royal Windsor Blazer',
      category: 'Jackets',
      brand: 'ATELIER LUXE',
      garmentUrl: '/src/assets/images/garment_velvet_blazer_1783242368999.jpg',
      resultUrl: '/src/assets/images/tryon_result_blazer_1783242384154.jpg',
      accentColor: '#6366f1', // Indigo
      description: 'Ultra-luxurious deep cobalt velvet blazer with elegant silver embellishments and a structured tailored fit.'
    }
  ]
};

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Upload Your Photo',
    description: 'Upload a portrait of yourself from your phone or camera. Our private on-device scanner captures your pose, lighting, and facial traits securely.',
    badge: 'On-Device',
    icon: 'Camera'
  },
  {
    number: '02',
    title: 'Choose a Garment',
    description: 'Upload any clothing item screenshot from online stores, social feeds, or select from our verified brand catalog of premium designers.',
    badge: 'Universal Support',
    icon: 'ShoppingBag'
  },
  {
    number: '03',
    title: 'Instant Fitting',
    description: 'Our Gemini-powered material analyzer decodes fabric attributes and guides SDXL to flawlessly render the exact outfit custom-draped onto your photo.',
    badge: 'Twin-Engine AI',
    icon: 'Sparkles'
  }
];

export const BENEFITS = [
  {
    id: 'benefit-returns',
    title: 'Eliminate Return Hassles',
    description: 'Know exactly how garments fit your body shape before clicking "Buy." Eliminate costly sizing mistakes, save endless post office trips, and shop with absolute certainty.',
    badge: 'Save Money',
    stat: '94%',
    statLabel: 'Fewer Return Shipments'
  },
  {
    id: 'benefit-sustainability',
    title: 'Conscious Sustainable Fashion',
    description: 'Experiment with infinite wardrobe combinations virtually. Our digital dressing room helps reduce impulse shopping and textile waste, promoting a mindful and curated closet.',
    badge: 'Eco-Friendly',
    stat: '2.5x',
    statLabel: 'Closer Wear Lifecycles'
  },
  {
    id: 'benefit-discovery',
    title: 'Risk-Free Style Discovery',
    description: 'Step outside your comfort zone. Experiment with bold neon patterns, avant-garde silhouettes, and sophisticated cuts without risking a single dollar on unworn clothes.',
    badge: 'Be Bold',
    stat: '10k+',
    statLabel: 'Unique Garments Cataloged'
  },
  {
    id: 'benefit-privacy',
    title: 'Your Private Dressing Room',
    description: 'We believe your body data is sacred. FitMirror is built with a fully secure local-first architecture. Your high-res photos never touch external cloud servers without your explicit consent.',
    badge: '100% Private',
    stat: '0kb',
    statLabel: 'Cloud Data Storage'
  }
];

export const FEATURES = [
  {
    id: 'feat-sdxl',
    title: 'SDXL High-Fidelity Rendering',
    description: 'Powered by an advanced custom Stable Diffusion XL model. Captures actual micro-fabric textures, leather sheen, natural drapery folds, and dynamic ambient shadows.',
    pill: 'Photorealistic'
  },
  {
    id: 'feat-gemini',
    title: 'Gemini Intelligent Analyzer',
    description: 'An advanced multi-modal framework that instantly scans garments to recognize fabrics, collar styles, button layout, and texture maps for optimal visual accuracy.',
    pill: 'Intelligent Vision'
  },
  {
    id: 'feat-saved',
    title: 'Saved Combinations',
    description: 'Build your personal digital Lookbook of virtual fits. Instantly catalog combinations, sort by style or occasion, and easily share fits with close friends.',
    pill: 'Secure Lookbook'
  }
];
