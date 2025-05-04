export interface Section {
  subtitle: string;
  paragraphs: string[];
  image?: string;
  images?: string[];
}

export interface HeroSlide {
  slug: string;
  title: string;
  description: string;
  image: string;
  sections: Section[];
}

export const heroSlides: HeroSlide[] = [
  {
    slug: "kumbh-milan",
    title: "Kumbh Connect – Social matching in Kumbh Mela",
    description:
      "The Kumbh Mela, historically a vital social and knowledge‑sharing event, is re‑imagined for the digital age…",
    image:
      "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/cover.png",
    sections: [
      {
        subtitle: "Business Requirements",
        paragraphs: [
          "We discovered that the true essence of the Kumbh Mela lies in its ability to bring people together…",
          "Kumbh, the largest and most iconic gathering in the world, was founded on this very philosophy…",
          "In today’s fast‑paced, digital‑first world, we built a mobile application that helps people connect…",
        ],
        image:
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/ganga.png",
      },
      {
        subtitle: "Solution",
        paragraphs: [
          "To address this need, we built a matchmaking and discovery application…",
        ],
        images: [
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/login.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/signup.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/termsConditions.jpg",
        ],
      },
      {
        subtitle: "Profile Creation and Management",
        paragraphs: [
          "Users can create a personalized profile by uploading a photo and sharing details about themselves—such as their background, interests, hobbies, concept of spirituality, and core values. The profile is designed to capture the individuality of each person and provide context for meaningful engagement. Profiles can be edited at any time, allowing users to refine their self-presentation as they continue their journey at Kumbh."
        ],
        images: [
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/profileCreation.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/profileCreation2.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/profileCreation3.jpg"
        ]
      },
      {
        subtitle: "People Discovery",
        paragraphs: [
          "The application is equipped with an intelligent discovery algorithm that suggests potential connections based on user preferences, shared interests, and other contextual signals. This helps users discover people who align with their intent, whether it’s spiritual discussion, cultural exchange, or simply companionship during the event."
        ],
        images: [
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/discover.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/discover2.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/discover3.jpg"
        ]
      },
      {
        subtitle: "People Matching",
        paragraphs: [
          "Once two users mutually express interest, they can connect and exchange contact information through the app. This feature is designed to be simple yet secure, allowing conversations to continue beyond the digital space and into the real-world setting of Kumbh Mela."
        ],
        images: [
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/matches.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/likes.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/detailpage.jpg"
        ]
      },
      {
        subtitle: "Multi-Language Support",
        paragraphs: [
          "Since Kumbh attracts millions of people from across India—many of whom speak different languages—we’ve built multi-language support directly into the application. This ensures accessibility for everyone, regardless of their linguistic background, and stays true to the inclusive spirit of Kumbh. By embracing linguistic diversity, the app fosters richer interactions and creates a more welcoming environment for all users."
        ],
        images: [
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/language.jpg",
          "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/profile.jpg"
        ]
      },
      {
        subtitle: "Tech stack",
        paragraphs: [
          "• Flutter (for cross-platform mobile development) | • Flask (Python) | • MySQL | • Docker + AWS",
        ],
      }
    ],
  },

  {
    slug: "quality-clinic",
    title: "Quality Clinic – Clinic Management System",
    description:
      "Quality Clinic, facing rapid expansion, transitioned from fragmented tools to a centralized digital system…",
    image: "/assets/Projects/QualityClinic/logo.png", // keep in /public
    sections: [
      {
        subtitle: "Business Requirements",
        paragraphs: [
          "Quality Clinic is a well‑known dental and dermatology clinic based in Abu Dhabi…",
        ],
        images: [
          "/assets/Projects/QualityClinic/splash.png",
          "/assets/Projects/QualityClinic/onboarding1.png",
          "/assets/Projects/QualityClinic/onboarding2.png",
        ],
      },
      {
        subtitle: "Solution",
        paragraphs: [
          "To meet this need, we developed a comprehensive digital solution consisting of a client-facing mobile application and an internal admin panel. The mobile app, available on both Android and iOS, enables clients to easily schedule, reschedule, or cancel appointments. To make the experience more engaging, we integrated a rewards and referral system that not only incentivizes repeat usage but also encourages users to refer the app to others. | Alongside the mobile app, we built a robust admin panel through which the entire ecosystem can be managed. This includes full visibility into appointments, clinics, doctors, and other operational aspects of the business. The dashboard also provides advanced data visualization to support better business decisions and give real-time insights into company performance."
        ],
        images: [
          "/assets/Projects/QualityClinic/menu.png",
          "/assets/Projects/QualityClinic/home.png",
          "/assets/Projects/QualityClinic/guest.png",
        ] // Random section image
      },
      {
        subtitle: "Booking Management System",
        paragraphs: [
          "We implemented a complete booking management system that supports the entire flow—from scheduling appointments to rescheduling, cancellations, and refunds. This automated approach significantly reduces manual effort and human error, resulting in a more efficient and seamless experience for both clients and clinic staff."
        ],
        images: [
          "/assets/Projects/QualityClinic/book1.png",
          "/assets/Projects/QualityClinic/book2.png",
          "/assets/Projects/QualityClinic/book3.png",
        ] // Random section image
      },
      {
        subtitle: "Doctor Management System",
        paragraphs: [
          "Doctors are the core resource of any clinic chain, and managing them across multiple locations is a complex task. We built an intelligent doctor management system that handles dynamic assignment based on demand, tracks doctor availability, and manages leaves. This ensures that staffing levels are optimal and responsive to real-time needs across all clinics."
        ],
        images: [
          "/assets/Projects/QualityClinic/doctor1.png",
          "/assets/Projects/QualityClinic/doctor2.png",
          "/assets/Projects/QualityClinic/doctor3.png",
        ], // Random section image
      },
      {
        subtitle: "Clinic Management System",
        paragraphs: [
          "Since the business focus is on rapid expansion, we made adding new clinics one of the core features of the platform. Using our system, a new clinic can be set up in under 15 minutes and start accepting bookings immediately. This drastically reduces the time and effort required to go live in a new location."
        ],
        image: "/assets/Projects/QualityClinic/clinic.png", // Random section image
      },
      {
        subtitle: "Data Analytics Platform",
        paragraphs: [
          "The admin panel is equipped with detailed graphs and visual insights that allow the management team to make data-driven decisions. From resource planning to identifying inefficiencies, the analytics tools provide clear visibility into all critical metrics and performance indicators across the organization."
        ],
        image: "/assets/Projects/QualityClinic/data.png", // Random section image
      },
      {
        subtitle: "Marketing and Reward System",
        paragraphs: [
          "We developed a comprehensive rewards and referral system that motivates users to return to the app and refer others. In addition, the mobile app serves as a marketing channel to keep clients informed about new offerings and promotions. Push notifications and in-app banners can be scheduled and managed directly from the admin panel, making it easy to run timely campaigns."
        ],
        image: "/assets/Projects/QualityClinic/services.png",
      },
      {
        subtitle: "The Design",
        paragraphs: [
          "We designed the mobile application with a strong focus on trust, simplicity, and safety. The user interface is intuitive, allowing new customers to navigate the app effortlessly and complete their tasks without confusion. Our team’s UX expertise played a key role in making the experience smooth and welcoming.",
          "The admin panel was designed with power users in mind, as it is primarily used by clinic employees. We included a comprehensive training module to help onboard new staff efficiently. The panel is divided into logical sections, each dedicated to a specific aspect of clinic management. This structured layout enables multiple users to work simultaneously while maintaining full oversight of operations."
        ],
        image: "/assets/Projects/QualityClinic/data.png",
      },
      {
        subtitle: "Tech Stack",
        paragraphs: [
          "• Next.js | • React Native | • Tailwind CSS | • Express.js | • MySQL | •Firebase (for real-time sync, notifications, and analytics) | • Azure",
        ],
      },
    ],
  },

  {
    slug: "ipl-voting",
    title: "IPL Voting – Crypto‑based Voting System",
    description:
      "CricketVoteCrypto is a Web3‑powered IPL prediction platform where users earn CVT tokens…",
    image:
      "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/refs/heads/main/public/home.png",
    sections: [
      {
        subtitle: "Business Requirements",
        paragraphs: [
          "CricketVoteCrypto is a Web3-powered IPL prediction platform where users participate in match-based prediction questions and earn CVT (Cricket Vote Token) as rewards. The goal is to create an engaging, gamified ecosystem around cricket matches, especially IPL, where users are incentivized for accurate predictions using blockchain-based transparency and trust. | With the growing popularity of fantasy sports and crypto tokens, this platform bridges both worlds by offering a secure, decentralized, and community-driven solution for prediction games. Users can connect their crypto wallets (like MetaMask), receive CVT tokens, participate in real-time match questions, and later claim additional rewards based on their correct predictions — all through smart contracts and Merkle tree verification.",
        ],
      },
      {
        subtitle: "Solution",
        paragraphs: [
          "To meet the need for a secure, engaging, and decentralized prediction game, we built a complete DApp consisting of: | • A frontend web platform built with Next.js | • Smart contracts deployed on the Sepolia Ethereum Testnet | • MongoDB for user data and question storage | • A robust admin dashboard for question management, answer entry, and Merkle root generation",
          "Users authenticate via MetaMask, receive an initial CVT token airdrop upon sign-up, and can vote on match-related questions. Once a match concludes, the admin marks correct answers, generates a Merkle tree of winning users, and stores the root on-chain. Users then claim their CVT rewards by submitting Merkle proofs — ensuring trust and fairness."
        ],
        image: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/home.png",
      },
      {
        subtitle: "Web3 Wallet Integration",
        paragraphs: [
          "Users can connect their MetaMask wallet to the platform to authenticate and interact with the DApp. Upon their first login, each user receives 10 CVT tokens, which are required to participate in predictions. All on-chain actions — such as voting and reward claiming — are tied directly to the user's wallet, ensuring secure and verifiable interactions."
        ],
      },
      {
        subtitle: "Prediction Question System",
        paragraphs: [
          "Admins can create match-specific prediction questions with multiple options and set deadlines. These questions appear in the user's dashboard in real-time. Users can cast their votes before the deadline using their CVT tokens. After the match ends, the correct options are updated by the admin, and the system marks user predictions as won or lost based on accuracy"
        ],
        image: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/admin.png",
      },
      {
        subtitle: "Reward Distribution with Merkle Tree",
        paragraphs: [
          "Once all correct answers are submitted for a match, the system generates a Merkle tree of users who predicted correctly. The root of this tree is stored on the Sepolia Ethereum smart contract. Each user can then claim their additional CVT rewards by providing a Merkle proof, which proves their eligibility without storing individual data on-chain."
        ],
        image: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/predictions.png",
      },
      {
        subtitle: "Comprehensive User Dashboard",
        paragraphs: [
          "The user dashboard is designed to give full visibility into prediction activity. For each match, users can see how many predictions they made, how many are still pending, and which ones were won or lost. The dashboard also displays the user's prediction accuracy — both overall and match-wise — as a percentage. This gives users a clear picture of their performance, encourages improvement, and gamifies the experience with stats."
        ],
        image: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/viewPrediction.png",
      },
      {
        subtitle: "Admin Panel for Match & Question Control",
        paragraphs: [
          "The admin dashboard provides full control over match questions. Admins can add matches, create or edit prediction questions, and close questions after the deadline. Once results are available, correct options are marked, and the Merkle tree can be generated with one click. The panel also handles pushing the Merkle root to the contract, streamlining the entire backend process"
        ],
        image: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/admin.png",
      },
      {
        subtitle: "Tech stack",
        paragraphs: [
          "• Frontend: Next.js, Tailwind CSS | • Database: MongoDB | • Smart Contracts: Solidity (ERC-20 + custom Merkle-based reward logic) | • Blockchain Network: Sepolia Ethereum Testnet | • Authentication: MetaMask Wallet",
        ],
      }
    ],
  },
];


export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const blogs: BlogMeta[] = [
  {
    slug: "kumbh-milan",
    title: "Kumbh Connect – Social matching in Kumbh Mela",
    description:
      "The Kumbh Mela, historically a vital social and knowledge‑sharing event, is re‑imagined for the digital age. An application facilitates connections among attendees, enabling them to discover like‑minded individuals, share experiences, and foster community through modern matchmaking tools.",
    image:
      "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/cover.png",
  },
  {
    slug: "quality-clinic",
    title: "Quality Clinic – Clinic Management System",
    description:
      "Quality Clinic, facing rapid expansion, transitioned from fragmented tools to a centralized digital system. A mobile app empowers clients with appointment management and a rewards program, while an admin panel ensures scalable and efficient growth.",
    image: "/assets/Projects/QualityClinic/logo.png", // ensure this file sits in /public/assets/...
  },
  {
    slug: "ipl-voting",
    title: "IPL Voting – Crypto‑based Voting System",
    description:
      "CricketVoteCrypto is a Web3‑powered IPL prediction platform rewarding accurate, on‑chain match predictions with CVT tokens, merging fantasy cricket and decentralized tech for transparent, community‑driven play.",
    image:
      "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/refs/heads/main/public/home.png",
  },
];

export const blogPageSlides = [
  {
    slug: "lorem-ipsum",
    title: "Lorem Ipsum Is Sim",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard since the 1500s.",
  },
  {
    slug: "boost-with-ai",
    title: "Boost Your Business with AI",
    description:
      "Embrace the power of AI and technology to stay ahead in the competitive market.",
  },
];