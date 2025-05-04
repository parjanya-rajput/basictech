export interface ClientInfo {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  logo: string;
  projectName: string;
  subtitle: string;
  clientInfo: ClientInfo[];
  businessRequirement: string | string[];
  features: string[];
  featureImage: string;
  challenge: string;
  challengeImage: string;
  design: string;
  designImage: string;
  solution: string;
  solutionImage: string;
  solutionPoints: string[];
  techstack?: string[];
}

export const projects: Project[] = [
  {
    slug: 'kumbh-milan',
    logo: "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/cover.png",
    projectName: "Kumbh Milan",
    subtitle: "Social matching in Kumbh Mela",
    clientInfo: [
      { label: "Client", value: "UrbanMatch Inc." },
      { label: "Vertical", value: "Social Networking" },
      { label: "Product", value: "Matchmaking App" },
      { label: "Industry", value: "Community & Relationships" },
      { label: "Company size", value: "51-200 employees" },
    ],
    businessRequirement: [
      "We discovered that the true essence of the Kumbh Mela lies in its ability to bring people together. In ancient times, when communication was limited to handwritten letters—slow, uncertain, and accessible only to a few—public gatherings served as the primary medium for knowledge exchange, problem-solving, and community building. These gatherings weren't just religious or spiritual; they were social infrastructure, enabling people to share experiences, ideas, and wisdom",
      "Kumbh, the largest and most iconic gathering in the world, was founded on this very philosophy. It allowed individuals from all over North India to follow rivers and natural paths until they converged at a common destination, where they could meet like-minded people, form connections, and share learnings that otherwise wouldn't be possible in isolated communities.",
      "In today's fast-paced, digital-first world, we wanted to carry this timeless tradition forward. So, we built a mobile application that helps people connect, converse, and meet during the Kumbh Mela—reviving the soul of the gathering in a modern way."
    ],
    features: [
      "Profile Creation and Management",
      "People Discovery",
      "People Matching",
      "Multi-Language Support",
    ],
    featureImage: "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/cover.png",
    challenge: "The development of Kumbh Connect faced several key challenges. |Multilanguage support was complex, requiring seamless translation and formatting for a diverse user base. The 'Connect Request' feature needed to balance privacy with ease of use, while state management became difficult as the app tracked multiple user interactions in real time. Hosting posed another challenge, especially considering potential scalability issues during peak traffic times. |Additionally, designing a clean, engaging UI that remained intuitive across various screens was crucial to ensure a smooth user experience.",
    challengeImage: "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/matches.jpg",
    design: "We designed the Kumbh Connect mobile application to revive the ancient spirit of human connection in a modern, digital format. Inspired by the historic essence of the Kumbh Mela as a space for meaningful gatherings and knowledge exchange, the interface allows users to explore fellow pilgrims based on shared interests, cultural backgrounds, and spiritual values. | The UI is intentionally simple and conversational, with intuitive elements like swipe gestures for expressing interest, and clear visual cues for profile exploration and interaction. Each user profile is structured to highlight key attributes—such as city, profession, interests, and preferred language—to help users find common ground. |Features like the 'Milan' (Meet) section streamline the discovery process and encourage real-world conversations, even after the event concludes. Overall, the design prioritizes warmth, clarity, and a sense of shared purpose—helping individuals find companionship and deeper connections amid the grand scale of the Kumbh.",
    designImage: "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/likes.jpg",
    solution: "To address this need, we built a matchmaking and discovery application that allows users to find and connect with other attendees during the Kumbh Mela. The app makes it easy for people to discover fellow pilgrims based on shared interests, backgrounds, and values.Users can browse through profiles, send connection requests, and engage in conversations if the request is accepted. This allows them to break the ice and plan in-person meetups during the event. Each user is encouraged to build a thoughtful and detailed profile, showcasing who they are, what they are looking for, and what they have to offer—be it knowledge, spiritual perspective, or companionship. This helps improve their chances of meaningful connections.",
    solutionImage: "https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/discover.jpg",
    solutionPoints: [
      "Connect with Like-Minded Folks",
      "Develop connections post-kumbh",
      "Share learnings and experiences",
    ],
  },
  {
    slug: 'quality-clinic',
    logo: "/assets/Projects/QualityClinic/logo.png",
    projectName: "Quality Clinic",
    subtitle: "Clinic Management System",
    clientInfo: [
      { label: "Client", value: "LulaMix" },
      { label: "Vertical", value: "Interior Design" },
      { label: "Product", value: "Home Customization App" },
      { label: "Industry", value: "Home & Living" },
      { label: "Company size", value: "101-500 employees" },
    ],
    businessRequirement:
      "Quality Clinic is a well-known dental and dermatology clinic based in Abu Dhabi. Currently, they operate four clinics across three cities and are planning to expand to ten more locations within the next year. At present, the management of daily operations is done through WhatsApp groups, Google Sheets, and various third-party tools for handling client bookings and appointments. This setup, while manageable initially, is already showing limitations. Even with just four clinics, the team is struggling to maintain operational efficiency. To support their rapid growth and streamline their workflow, they needed a centralized, scalable clinic management system.",
    features: [
      "Booking Management System",
      "Doctor Management System",
      "Clinic Management System",
      "Data Analytics Platform",
      "Marketing and Reward System",
    ],
    featureImage: "/assets/Projects/QualityClinic/home.png",
    challenge:
      "One of the major challenges in this project was transitioning Quality Clinic’s fragmented operational workflow—spread across WhatsApp, Google Sheets, and third-party tools—into a unified digital platform without disrupting ongoing operations. |Designing a system that could scale from four to over ten clinics while maintaining performance and data integrity required careful architecture planning. Additionally, creating a seamless experience across both the mobile app and admin panel posed UI/UX challenges, especially in balancing simplicity for end-users with the depth of control required by clinic staff. |Integrating features like a dynamic reward system, real-time analytics, and centralized appointment management added further complexity, demanding tight coordination between frontend, backend, and data teams.",
    design: "We designed the mobile application with a strong focus on trust, simplicity, and safety. The user interface is intuitive, allowing new customers to navigate the app effortlessly and complete their tasks without confusion. Our team’s UX expertise played a key role in making the experience smooth and welcoming.| The admin panel was designed with power users in mind, as it is primarily used by clinic employees. We included a comprehensive training module to help onboard new staff efficiently. The panel is divided into logical sections, each dedicated to a specific aspect of clinic management. This structured layout enables multiple users to work simultaneously while maintaining full oversight of operations.",
    designImage: "/assets/Projects/QualityClinic/book2.png",
    challengeImage: "/assets/Projects/QualityClinic/clinic.png",
    solution:
      "To meet this need, we developed a comprehensive digital solution consisting of a client-facing mobile application and an internal admin panel. The mobile app, available on both Android and iOS, enables clients to easily schedule, reschedule, or cancel appointments. To make the experience more engaging, we integrated a rewards and referral system that not only incentivizes repeat usage but also encourages users to refer the app to others. | Alongside the mobile app, we built a robust admin panel through which the entire ecosystem can be managed. This includes full visibility into appointments, clinics, doctors, and other operational aspects of the business. The dashboard also provides advanced data visualization to support better business decisions and give real-time insights into company performance.",
    solutionImage: "/assets/Projects/QualityClinic/data.png",
    solutionPoints: [
      "Client Mobile Application",
      "Admin Management Panel",
      "Data Analytics & Visualization",
    ],
    techstack: [
      //keep image url
    ],
  },
  {
    slug: 'ipl-voting',
    logo: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/refs/heads/main/public/home.png",
    projectName: "IPL Voting",
    subtitle: "Crypto-based Voting System",
    clientInfo: [
      { label: "Client", value: "LulaMix" },
      { label: "Vertical", value: "Interior Design" },
      { label: "Product", value: "Home Customization App" },
      { label: "Industry", value: "Home & Living" },
      { label: "Company size", value: "101-500 employees" },
    ],
    businessRequirement:
      "CricketVoteCrypto is a Web3-powered IPL prediction platform where users participate in match-based prediction questions and earn CVT (Cricket Vote Token) as rewards. The goal is to create an engaging, gamified ecosystem around cricket matches, especially IPL, where users are incentivized for accurate predictions using blockchain-based transparency and trust. | With the growing popularity of fantasy sports and crypto tokens, this platform bridges both worlds by offering a secure, decentralized, and community-driven solution for prediction games. Users can connect their crypto wallets (like MetaMask), receive CVT tokens, participate in real-time match questions, and later claim additional rewards based on their correct predictions — all through smart contracts and Merkle tree verification.",
    features: [
      "Web3 Wallet Integration",
      "Prediction Question System",
      "Reward Distribution with Merkle Tree",
      "Comprehensive User Dashboard",
      "Admin Panel for Match & Question Control",
    ],
    featureImage: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/predictions.png",
    challenge:
      "One of the key challenges in developing CricketVoteCrypto was integrating seamless Web3 wallet interactions while maintaining a smooth user experience.| Ensuring compatibility with MetaMask across different browsers and devices required extensive testing and fallback handling. |Additionally, implementing secure and gas-efficient Merkle tree reward claims involved complex smart contract logic and precise off-chain data processing. |Balancing real-time frontend updates with blockchain confirmation times also posed difficulties, especially in keeping prediction statuses and results synced accurately. |Finally, building an intuitive yet powerful admin dashboard demanded careful UX planning to handle intricate flows like question management and Merkle root generation without overwhelming non-technical users.",
    design: "We designed the CricketVoteCrypto platform with a focus on clarity, real-time interaction, and trust — essential qualities for a Web3-powered IPL prediction experience. The user interface is sleek and intuitive, built to cater to both crypto-savvy users and cricket fans unfamiliar with blockchain. In the dashboard screen, users are presented with match-specific prediction cards that clearly show question status, options, and deadlines. This modular card-based layout allows for quick scanning and action, while the consistent color scheme helps users differentiate between active, pending, and closed predictions.| At the top, wallet connectivity is prominently placed, reinforcing the platform’s Web3 identity and ensuring that users can manage CVT tokens and interact with smart contracts seamlessly. Real-time feedback, minimal loading states, and progress indicators enhance responsiveness, making the entire experience feel dynamic and game-like. Every UI element was crafted to strike a balance between gamification and utility — giving users not just a prediction platform, but a rewarding, trustless game layer around the cricket they love.",
    designImage: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/admin.png",
    challengeImage: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/viewPrediction.png",
    solution:
      "CricketVoteCrypto is a Web3-powered IPL prediction platform where users participate in match-based prediction questions and earn CVT (Cricket Vote Token) as rewards. The platform merges fantasy cricket and decentralized Web3 technology, ensuring transparent, fair, and community-driven match predictions.",
    solutionImage: "https://raw.githubusercontent.com/basictech01/cricketvoteblockchain/main/public/viewPrediction.png",
    solutionPoints: [
      "Web3-Powered Prediction Platform",
      "CVT Token Rewards System",
      "Community-Driven Platform",
    ],
  },
];
