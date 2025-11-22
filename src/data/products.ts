// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов копирайтинга
  return `/images/img_1.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем copywriting изображения
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (1).mp4";
  }
  if (productId === 2) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (2).mp4";
  }
  if (productId === 3) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (3).mp4";
  }
  if (productId === 4) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (4).mp4";
  }
  if (productId === 5) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (5).mp4";
  }
  if (productId === 6) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (6).mp4";
  }
  if (productId === 7) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (7).mp4";
  }
  if (productId === 8) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (8).mp4";
  }
  if (productId === 9) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (9).mp4";
  }
  if (productId === 10) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (11).mp4";
  }
  if (productId === 11) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (14).mp4";
  }
  if (productId === 12) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4";
  }
  if (productId === 13) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (21).mp4";
  }
  if (productId === 14) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (25).mp4";
  }
  if (productId === 15) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (21).mp4";
  }
  if (productId === 16) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4";
  }
  if (productId === 17) {
    return "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (14).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 8-10 (69-99): 3 videos each
  if (productId === 8) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (8).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (9).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (10).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (11).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (12).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (13).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (14).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (15).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (16).mp4"
    ];
  }
  
  // Courses 11-14 (79-109): 4 videos each
  if (productId === 11) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (18).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (19).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (20).mp4"
    ];
  }
  if (productId === 12) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (21).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (22).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (23).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (24).mp4"
    ];
  }
  if (productId === 13) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (25).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (26).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (27).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (28).mp4"
    ];
  }
  
  // Course 14 (109): 4 videos
  if (productId === 14) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (25).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (26).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (27).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (28).mp4"
    ];
  }
  
  // Course 15 (119): 4 videos - duplicating existing videos
  if (productId === 15) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (21).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (22).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (23).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (24).mp4"
    ];
  }
  
  // Course 16 (129): 4 videos - duplicating existing videos
  if (productId === 16) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (18).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (19).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (20).mp4"
    ];
  }
  
  // Course 17 (139): 5 videos - duplicating existing videos
  if (productId === 17) {
    return [
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (14).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (15).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (16).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (17).mp4",
      "/videos/60 Copywriting Lessons Actionable Tips to Build a Career as a Co (18).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Copywriting Introduction - Special Offer",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Special introductory offer - Get started with copywriting basics at an unbeatable price.",
    detailedDescription: "Start your copywriting journey with this special introductory course. Learn the essential foundations of persuasive writing and discover what copywriting can do for your career. Perfect for complete beginners who want to test the waters before committing to advanced training.",
    category: "Special Offer",
    features: [
      "Introduction to copywriting",
      "Basic writing principles",
      "Career overview",
      "Getting started tips",
      "Special limited-time price"
    ],
    specifications: {
      "Duration": "5 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Introduction & Basics",
      "Access": "3 months",
      "Certificate": "Starter badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Copywriting Fundamentals",
    price: 1.95,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Introduction to persuasive copywriting with essential writing techniques and psychology basics.",
    detailedDescription: "Master the fundamentals of persuasive copywriting. Learn core writing principles, understand customer psychology, and get started with your copywriting journey. Perfect foundation for aspiring copywriters.",
    category: "Copywriting Basics",
    features: [
      "Core copywriting principles",
      "Psychology of persuasion",
      "Basic writing techniques",
      "Customer psychology basics",
      "Getting started guide"
    ],
    specifications: {
      "Duration": "7 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Focus": "Persuasive Writing",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Headlines That Convert",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Master headline writing techniques and psychological triggers for maximum conversion rates.",
    detailedDescription: "Deep dive into headline writing with comprehensive training on psychological triggers, conversion optimization, and proven formulas. Learn to write headlines that grab attention and drive action for professional marketing campaigns.",
    category: "Headline Writing",
    features: [
      "Proven headline formulas",
      "Psychological triggers mastery",
      "A/B testing strategies",
      "Conversion optimization",
      "Professional templates"
    ],
    specifications: {
      "Duration": "8 minutes",
      "Level": "Beginner",
      "Focus": "Headlines & Conversion",
      "Topics": "Psychology, formulas, testing",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Email Marketing Copywriting",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Learn email copywriting techniques and sequence strategies for high-converting email campaigns.",
    detailedDescription: "Master email copywriting with comprehensive training on email sequences, subject lines, and conversion optimization. Learn professional techniques for effective email marketing and precise audience targeting.",
    category: "Email Marketing",
    features: [
      "Email sequence mastery",
      "Subject line techniques",
      "Conversion optimization",
      "Audience segmentation",
      "A/B testing precision"
    ],
    specifications: {
      "Duration": "10 minutes",
      "Level": "Beginner",
      "Focus": "Email Marketing",
      "Tools": "Sequences, subject lines, testing",
      "Access": "10 months",
      "Bonus": "Email templates library"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Sales Page Copywriting",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Master sales page copywriting - the foundation of all high-converting sales funnels and landing pages.",
    detailedDescription: "Learn the essential sales page copywriting techniques that form the foundation of all high-converting campaigns. Master persuasion, structure, and the fundamental psychology of selling through proven frameworks used by professional copywriters worldwide.",
    category: "Sales Copywriting",
    features: [
      "Sales page structure mastery",
      "Persuasion psychology principles",
      "Conversion-focused writing",
      "AIDA framework fundamentals",
      "Professional sales workflow"
    ],
    specifications: {
      "Duration": "12 minutes",
      "Level": "Intermediate",
      "Focus": "Sales pages, conversion, psychology",
      "Techniques": "AIDA, persuasion, structure",
      "Access": "8 months",
      "Bonus": "Sales page templates"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Direct Response Copywriting",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    description: "Master direct response copywriting for immediate action and maximum response rates.",
    detailedDescription: "Master the powerful direct response copywriting techniques with comprehensive training. Learn direct response principles, urgency creation, and professional conversion optimization techniques used by industry copywriters.",
    category: "Direct Response",
    features: [
      "Direct response mastery",
      "Urgency and scarcity tactics",
      "Professional conversion techniques",
      "Industry-standard frameworks",
      "Live campaign analysis"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Level": "Intermediate",
      "Focus": "Direct response, urgency, conversion",
      "Projects": "Live campaign exercises",
      "Access": "10 months",
      "Bonus": "Direct response templates"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Social Media Copywriting",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    description: "Learn social media copywriting principles - essential for engaging your audience and driving action.",
    detailedDescription: "Master social media copywriting with comprehensive training covering platform-specific techniques, engagement strategies, and professional social media campaign applications.",
    category: "Social Media",
    features: [
      "Platform-specific mastery",
      "Engagement strategy setup",
      "Social media campaign principles",
      "Professional techniques",
      "Live campaign analysis"
    ],
    specifications: {
      "Duration": "18 minutes",
      "Level": "Intermediate",
      "Focus": "Social media, engagement, campaigns",
      "Applications": "Facebook, Instagram, LinkedIn copywriting",
      "Access": "12 months",
      "Support": "Social media templates"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Advanced Copywriting Techniques",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    description: "Master advanced copywriting techniques including storytelling, persuasion principles, and professional frameworks.",
    detailedDescription: "Master advanced copywriting with comprehensive training on storytelling techniques, persuasion psychology, and professional frameworks covering narrative structures, psychological triggers, and conversion optimization.",
    category: "Advanced Copywriting",
    features: [
      "Storytelling mastery (Hero's Journey)",
      "Advanced persuasion techniques",
      "One Big Idea framework",
      "Professional narrative polish",
      "Psychological triggers mastery"
    ],
    specifications: {
      "Duration": "22 minutes",
      "Level": "Intermediate",
      "Focus": "Storytelling, persuasion, frameworks",
      "Applications": "Narrative copywriting, emotional triggers",
      "Access": "12 months",
      "Bonus": "Storytelling templates"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Professional Writing Fundamentals",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master professional writing fundamentals with comprehensive training on structure, clarity, and audience engagement.",
    detailedDescription: "Master professional writing with comprehensive training. This course includes 3 detailed video modules covering writing structure, audience targeting, clarity techniques, and professional editing methods for effective business communication.",
    category: "Professional Writing",
    features: [
      "3 detailed video modules",
      "Writing structure fundamentals",
      "Audience targeting mastery",
      "Clarity and conciseness",
      "Professional editing techniques",
      "Business communication mastery"
    ],
    specifications: {
      "Duration": "25 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Structure, clarity, audience targeting",
      "Techniques": "Professional writing, editing",
      "Access": "12 months",
      "Bonus": "Writing templates library"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Advanced Headline Writing & Formulas",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Master advanced headline writing techniques with proven formulas and power words for maximum impact.",
    detailedDescription: "Master advanced headline writing with comprehensive formula training. This premium course includes 3 comprehensive video modules covering ABC Formula, ROT Formula, power words, and professional headline optimization techniques.",
    category: "Advanced Headlines",
    features: [
      "3 comprehensive video modules",
      "ABC Formula mastery",
      "ROT Formula techniques",
      "Power words optimization",
      "Professional headline strategies",
      "A/B testing principles"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Headline formulas, power words, testing",
      "Techniques": "ABC/ROT formulas, optimization",
      "Access": "15 months",
      "Bonus": "Headline formula collection"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Persuasion Psychology Mastery",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master the 6 principles of persuasion and advanced psychological techniques for professional copywriting.",
    detailedDescription: "Master professional persuasion psychology with comprehensive training on Cialdini's 6 principles. This premium course includes 3 detailed video modules covering Authority, Consistency, Likeability, Reciprocity, Social Proof, and Scarcity for maximum conversion results.",
    category: "Persuasion Psychology",
    features: [
      "3 detailed video modules",
      "6 Principles of Persuasion mastery",
      "Authority building techniques",
      "Social proof optimization",
      "Scarcity and urgency tactics",
      "Advanced psychological triggers"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Focus": "Persuasion psychology, conversion",
      "Techniques": "6 principles, psychological triggers",
      "Access": "15 months",
      "Bonus": "Psychology reference toolkit"
    },
    inStock: true
  },
  {
    id: 12,
    name: "SEO Copywriting Mastery",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master SEO copywriting techniques for search engine optimization and organic traffic growth.",
    detailedDescription: "Master SEO copywriting with comprehensive training on keyword research, on-page optimization, and content strategy. This premium course includes 4 comprehensive video modules covering search intent, technical SEO, and conversion-focused content creation.",
    category: "SEO Copywriting",
    features: [
      "4 comprehensive video modules",
      "Keyword research mastery",
      "On-page SEO optimization",
      "Search intent analysis",
      "Technical SEO basics",
      "Content strategy development"
    ],
    specifications: {
      "Duration": "35 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Advanced",
      "Focus": "SEO, keyword research, optimization",
      "Techniques": "Search optimization, content strategy",
      "Access": "15 months",
      "Bonus": "SEO toolkit & templates"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Content Marketing & Strategy",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Master content marketing strategy, planning, and execution for business growth and brand authority.",
    detailedDescription: "Master content marketing with comprehensive strategy training. This premium course includes 4 comprehensive video modules covering content planning, distribution channels, analytics, and ROI measurement for sustainable business growth.",
    category: "Content Marketing",
    features: [
      "4 comprehensive video modules",
      "Content strategy development",
      "Distribution channel mastery",
      "Analytics and measurement",
      "ROI optimization",
      "Brand authority building"
    ],
    specifications: {
      "Duration": "24 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Advanced",
      "Focus": "Strategy, distribution, analytics",
      "Techniques": "Content planning, ROI measurement",
      "Access": "18 months",
      "Bonus": "Content strategy templates"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Conversion Rate Optimization",
    price: 109.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Master conversion rate optimization techniques including A/B testing, analytics, and user psychology.",
    detailedDescription: "Master conversion optimization with advanced training on testing methodologies, data analysis, and user behavior. This premium course includes 4 comprehensive video modules covering CRO fundamentals, testing frameworks, and optimization strategies.",
    category: "Conversion Optimization",
    features: [
      "4 comprehensive video modules",
      "A/B testing mastery",
      "Analytics interpretation",
      "User psychology insights",
      "Testing framework development",
      "Optimization strategies"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "CRO, testing, analytics",
      "Techniques": "A/B testing, data analysis",
      "Access": "18 months",
      "Bonus": "CRO toolkit & testing templates"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Freelance Copywriting Business Mastery",
    price: 119.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Master freelance copywriting business - from client acquisition to project management and scaling your income.",
    detailedDescription: "Build a thriving freelance copywriting business with comprehensive training on client acquisition, pricing strategies, project management, and business scaling. This premium course includes 4 comprehensive video modules covering all aspects of running a successful freelance copywriting business.",
    category: "Freelance Business",
    features: [
      "4 comprehensive video modules",
      "Client acquisition strategies",
      "Pricing and packaging mastery",
      "Project management systems",
      "Business scaling techniques",
      "Contract and legal basics"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Freelance business, client management",
      "Skills": "Business development & scaling",
      "Access": "Lifetime",
      "Bonus": "Business templates & contracts"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Agency Copywriting & Team Leadership",
    price: 129.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Master agency-level copywriting and team leadership - managing copywriters, delivering large projects, and scaling operations.",
    detailedDescription: "Excel in agency copywriting environments with advanced training on team leadership, multi-client management, and large-scale project delivery. This premium course includes 4 comprehensive video modules covering agency workflows, team management, and operational excellence.",
    category: "Agency & Leadership",
    features: [
      "4 comprehensive video modules",
      "Team leadership mastery",
      "Multi-client management",
      "Large-scale project delivery",
      "Agency workflow optimization",
      "Quality control systems"
    ],
    specifications: {
      "Duration": "36 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Focus": "Agency operations, team leadership",
      "Skills": "Leadership & operational excellence",
      "Access": "Lifetime",
      "Bonus": "Agency templates & SOPs"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Complete Copywriting Mastery + Client Acquisition",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "Master all aspects of copywriting plus client acquisition strategies including LinkedIn outreach, cold email, and guest posting.",
    detailedDescription: "Achieve complete copywriting mastery with comprehensive training plus business development. This premium course includes 5 comprehensive video modules covering all copywriting principles, advanced techniques, professional workflows, and proven client acquisition strategies used by successful copywriters worldwide.",
    category: "Complete Mastery",
    features: [
      "5 comprehensive video modules",
      "Complete copywriting mastery",
      "All persuasion principles covered",
      "LinkedIn outreach strategies",
      "Cold email techniques",
      "Guest posting for clients",
      "Professional client workflows",
      "Business development mastery"
    ],
    specifications: {
      "Duration": "40 minutes",
      "Videos": "5 comprehensive modules",
      "Level": "Expert",
      "Coverage": "All copywriting + client acquisition",
      "Skills": "Complete copywriting & business mastery",
      "Access": "Lifetime",
      "Bonus": "Complete copywriting toolkit & client templates"
    },
    inStock: true
  }
];
