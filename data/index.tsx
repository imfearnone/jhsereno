export const items = [
    {
      imgSrc: "/responsive.png",
      title: "Responsive",
      description: "I am always available via phone, text, or email.",
    },
    {
      imgSrc: "/syndication.png",
      title: "Syndication",
      description: "I market your property locally, nationally, and internationally.",
    },
    {
      imgSrc: "/virtual-tour.png",
      title: "Virtual Tour",
      description: "Let's make your home stand out with a high quality virtual tour.",
    },
    {
      imgSrc: "/photography.png",
      title: "Photography",
      description: "Beatiful, high-end photography is a central part of our marketing plan for your property.",
    },
  ];

  export const itemsCopy = [
    {
      imgSrc: "/responsive.png",
      title: "Responsive",
      description: "I am always available via phone, text, or email.",
    },
    {
      imgSrc: "/syndication.png",
      title: "Syndication",
      description: "I market your property locally, nationally, and internationally.",
    },
    {
      imgSrc: "/virtual-tour.png",
      title: "Virtual Tour",
      description: "Let's make your home stand out with a high quality virtual tour.",
    },
    {
      imgSrc: "/drone.png",
      title: "Drone Photography",
      description: "Beatiful, high-end photography is a central part of our marketing plan for your property.",
    },
  ];

export const sections = [
  {
    title: 'DECOR GUIDANCE',
    subtitle: 'My Staging Expertise',
    points: [
        'Unclutter and organize your home',
        'Neatly arrange drawers and cabinets',
        'Keep pets outdoors or off the premises',
        'Play soft music'
    ],
    images: [
        '/decor-guidance1.png',
        '/decor-guidance2.png'
    ]
  },
  {
    title: 'INTENTIONAL LAYOUT',
    points: [
        'Unclutter and organize your home',
        'Neatly arrange drawers and cabinets',
        'Keep pets outdoors or off the premises',
        'Play soft music'
    ],
    images: [
        '/intentional-layout1.png',
        '/intentional-layout2.png'
    ]
  }
];

export const sells = [
  {
    title: 'Initial Consultation & Planning', 
  },
  {
    title: 'Devise & Execute Marketing Plan',
  },
  {
    title: 'Review Offers & Reach Agreement with Buyer',
  },
  {
    title: 'Complete Transaction Process',
  },
  {
    title: 'After - Sale Service',
  },
];

export const buys = [
  {
    title: 'Initial Consultation & Planning', 
  },
  {
    title: 'Search for a Home & Get Pre-Approved',
  },
  {
    title: 'Submit an Offer',
  },
  {
    title: 'Complete Settlement Process',
  },
];

export const choose = [
  {
    title: "Over 33 Years of Real Estate Success",
    text: `We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, 
           often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, 
           experience is 100% nonnegotiable. And it's an experience like no other.`,
    imageSrc: "/choose1.png",
    imageAlt: "Decor Guidance 1",
  },
  {
    title: "We Want To Create An Unforgettable Experience For You...",
    text: `We combine data gained from your home's Comparative Market Analysis with local market research to create a marketing plan 
           designed to help you meet your selling goals. Your home's carefully designed plan will include a range of online, print, and 
           other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today's real estate 
           environment requires a firm with experience and flexibility. Hansen Partners provides both.`,
    imageSrc: "/choose2.png",
    imageAlt: "Intentional Layout",
  },
  {
    title: "A Wonderful Tool for Communication",
    text: `We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.`,
    imageSrc: "/choose3.png",
    imageAlt: "Communication Tool",
    benefitsHeader: "Benefits:",
    benefits: [
      "Review all documents and sign in the comfort of your home or anywhere.",
      "Stay up to date on all marketing activities, review materials, photos, etc., in real-time.",
      "Meet with us face-to-face on our Gotomeeting.com platform to discuss the events of the week.",
      "You have your own email assigned just for you and a common space for quick notes or video messages via our Bomb Bomb video messaging system."
    ],
    closingText: `We believe that transparency and guiding you and your family through the process is key to having the best experience. 
                  During these uncertain times, it is a good feeling to know you have someone with a proven track record you can count on. 
                  We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because that 
                  is just what we do. Who you work with does matter!`,
  },
];

export const marketData = [
  {
    id: 1,
    title: "Local Exposure",
    description: "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure.",
    image: "/virtual-tour.png"
  },
  {
    id: 2,
    title: "National Exposure",
    description: "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure.",
    image: "/national.png"
  },
  {
    id: 3,
    title: "International Exposure",
    description: "To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals.",
    image: "/international.png"
  }
];

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0, 
    transition: {
      duration: 1, 
      ease: "easeInOut", 
    },
  },
};