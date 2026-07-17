// Mock data for Saffron Brand Consultants clone
const IMG = "https://saffron.imgix.net";
const p = "?ixlib=js-3.8.0&q=80&auto=format%2Ccompress&fit=crop";

export const navLinks = [
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about" },
  { label: "JOURNAL", to: "/journal" },
  { label: "LAB", to: "/lab" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACT", to: "/contact" },
];

// Hero carousel slides. Videos linked to YouTube (in-app viewer)
export const heroSlides = [
  {
    id: "youtube",
    name: "YouTube",
    icon: `${IMG}/Case-Studies/Youtube_CS/Gallery/YouTube_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Youtube_CS/Gallery/YouTube_Cover_IMG_1x1.png${p}&w=1920`,
    youtube: "9bZkp7q19f0",
    to: "/work/youtube",
  },
  {
    id: "repsol",
    name: "Repsol",
    icon: `${IMG}/Case-Studies/Repsol_CS/Gallery/Repsol_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_1.png${p}&w=1920`,
    youtube: " scy6Hk8t3ac".trim(),
    to: "/work/repsol",
  },
  {
    id: "meta",
    name: "Meta",
    icon: `${IMG}/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Icon_1x1.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_1.png${p}&w=1920`,
    youtube: "AbZH7XWDW_k",
    to: "/work/meta",
  },
  {
    id: "va",
    name: "V&A",
    icon: `${IMG}/Case-Studies/Victoria-and-Albert-Museum_CS/Gallery/VA_Icon_1x1_v2.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png${p}&w=1920`,
    youtube: "1La4QzGeaaQ",
    to: "/work/victoria-and-albert-museum",
  },
  {
    id: "amazon-ads",
    name: "Amazon Ads",
    icon: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Icon_1x1_3.png${p}&w=120&h=120`,
    bg: `${IMG}/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png${p}&w=1920`,
    youtube: "mn1TuBSGH9M",
    to: "/work/amazon-ads",
  },
];

export const teaserImages = [
  `${IMG}/Home/Teaser-Gallery/FRAME-1.png${p}&w=600&h=600`,
  `${IMG}/Home/Teaser-Gallery/FRAME-2.png${p}&w=600&h=600`,
  `${IMG}/Home/Teaser-Gallery/Web_Home_Action_1x1.webp${p}&w=600&h=600`,
];

const cover = (path) => `${IMG}${path}${p}&w=800&h=800`;
const avatar = (path) => `${IMG}${path}${p}&w=96&h=96`;

export const caseStudies = [
  {
    id: "repsol",
    client: "Repsol",
    category: "Energy & Industrial",
    title: "Confluence of energies",
    icon: avatar("/Case-Studies/Repsol_CS/Gallery/Repsol_Icon_1x1.png"),
    cover: cover("/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/Repsol_CS/Gallery/Repsol_Hover_IMG_1x1_3.png"),
    to: "/work/repsol",
  },
  {
    id: "cupra",
    client: "Cupra",
    category: "Mobility & Hospitality",
    title: "The impulse of a new generation",
    icon: avatar("/Case-Studies/Cupra_CS/Gallery/Cupra_Icon.png"),
    cover: cover("/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_1.png"),
    hover: cover("/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_3.1.png"),
    to: "/work/cupra",
  },
  {
    id: "meta",
    client: "Meta",
    category: "Technology",
    title: "The next chapter of social connection",
    icon: avatar("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Icon_1x1.png"),
    cover: cover("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/Meta_CS/Meta_MBS/Gallery/Meta_Hover_IMG_1x1_3.png"),
    to: "/work/meta",
  },
  {
    id: "youtube",
    client: "YouTube",
    category: "Technology",
    title: "Taking the tube out of YouTube",
    icon: avatar("/Case-Studies/Youtube_CS/Gallery/YouTube_Icon_1x1.png"),
    cover: cover("/Case-Studies/Youtube_CS/Gallery/YouTube_Cover_IMG_1x1.png"),
    hover: cover("/Case-Studies/Youtube_CS/Gallery/YouTube_Hover_IMG_1x1_2.png"),
    to: "/work/youtube",
  },
  {
    id: "jr-west",
    client: "West Japan Railway Company",
    category: "Mobility & Hospitality, Places & Real Estate",
    title: "The extraordinary in plain sight",
    icon: avatar("/Case-Studies/JR-West_CS/Gallery/JR-Wes_Avatar.png"),
    cover: cover("/Case-Studies/JR-West_CS/Gallery/JR-West_Cover_1.webp"),
    hover: cover("/Case-Studies/JR-West_CS/Gallery/JR-West_Hover_3.webp"),
    to: "/work/west-japan-railway-company",
  },
  {
    id: "play",
    client: "Play Media",
    category: "Culture & Media",
    title: "Rewriting the rules of Play",
    icon: avatar("/Case-Studies/Play-Media_CS/Gallery/Play_Icon_Avatar_1x1.png"),
    cover: cover("/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_P1_4x5_1_3x.webp"),
    hover: cover("/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_Gallery_2_3x.webp"),
    to: "/work/play",
  },
  {
    id: "city-of-vienna",
    client: "City of Vienna",
    category: "Places & Real Estate",
    title: "The Human at the Heart",
    icon: avatar("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Icon_1x1_v2.png"),
    cover: cover("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Hover_IMG_1x1_1.png"),
    hover: cover("/Case-Studies/City-of-Vienna_CS/Gallery/City-of-Vienna_Hover_IMG_1x1_3.png"),
    to: "/work/city-of-vienna",
  },
  {
    id: "vueling",
    client: "Vueling",
    category: "Mobility & Hospitality",
    title: "Why fly when you can Vueling",
    icon: avatar("/Case-Studies/Vueling_CS/Gallery/Vueling_Icon_1x1.png"),
    cover: cover("/Case-Studies/Vueling_CS/Gallery/Vueling_Cover_IMG_1x1.png"),
    hover: cover("/Case-Studies/Vueling_CS/Gallery/Vueling_Hover_IMG_1x1_2.png"),
    to: "/work/vueling",
  },
  {
    id: "amazon-ads",
    client: "Amazon Ads",
    category: "Technology",
    title: "The rise of Ads",
    icon: avatar("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Icon_1x1_3.png"),
    cover: cover("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_2.png"),
    hover: cover("/Case-Studies/Amazon-Ads_CS/Gallery/AAds_Hover_1x1_3.png"),
    to: "/work/amazon-ads",
  },
];

export const services = [
  "Brand Architecture",
  "Brand Identity",
  "Brand Positioning",
  "Business Case",
  "Customer Experience",
  "Delivery System",
  "Employee Experience",
  "Experience Ecosystem",
  "Prototype",
];

export const journal = [
  {
    id: "vrt-sporza",
    tag: "News",
    read: "1 min read",
    date: "3 June 2026",
    title: "VRT Relaunches Sporza for World Cup 2026",
    image: `${IMG}/Case-Studies/Play-Media_CS/Gallery/Play-Media_CS_Gallery_4_3x.webp${p}&w=800&h=600`,
  },
  {
    id: "5rs",
    tag: "Insights",
    read: "3 min read",
    date: "21 June 2026",
    title: "Applying the 5Rs of brand experience",
    image: `${IMG}/Case-Studies/Cupra_CS/Gallery/Cupra-CS_Hover_4.png${p}&w=800&h=600`,
  },
  {
    id: "culture-address",
    tag: "Insights",
    read: "5 min read",
    date: "4 June 2026",
    title: "Culture has a new address",
    image: `${IMG}/Journal/2026/Culture_POV/Culture_POV_Card_4x3_2x.webp${p}&w=800&h=600`,
  },
];

export const offices = [
  "London",
  "Madrid",
  "Vienna",
  "Istanbul",
  "Mumbai",
  "New York",
];
