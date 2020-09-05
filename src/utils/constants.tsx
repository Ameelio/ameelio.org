import Family from "src/assets/WhyAmeelio/Family.svg";
import Globe from "src/assets/WhyAmeelio/Globe.svg";
import Mailbox from "src/assets/WhyAmeelio/Mailbox.svg";
import Zo from "src/assets/Team/Zo.png";
import Gabe from "src/assets/Team/Gabe.png";
import Emma from "src/assets/Team/Emma.png";
import Lara from "src/assets/Team/Lara.png";
import Jenny from "src/assets/Team/Jenny.png";
import Angel from "src/assets/Board/Angel.png";
import Bart from "src/assets/Board/Bart.png";
import Jan from "src/assets/Board/Jan.png";
import Shane from "src/assets/Board/Shane.png";
import Alyssa from "src/assets/Board/Alyssa.png";
import Jay from "src/assets/Board/Jay.png";
import Bijan from "src/assets/Board/Bijan.png";
import Adryann from "src/assets/Board/Adryann.png";

export enum PLACEMENT {
  NAV = "navbar",
  HERO = "hero",
  CARD = "card",
  SECTION = "section",
}

export enum LINKS {
  SIGNUP = "https://letters.ameelio.org/register",
  LOGIN = "https://letters.ameelio.org/login",
  ORGS_DEMO = "https://calendly.com/emma-gray-ameelio/letters-for-organizations-information-session",
  DONATION = "https://letters.ameelio.org/donate",
  APPLE_STORE = "https://apps.apple.com/us/app/ameelio/id1526489300",
  GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=com.ameelio.letters_mobile&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
}

export enum BUTTON_TYPES {
  LOGIN = "Login",
  SIGNUP = "Sign Up",
  ORGS_DEMO = "Request Demo Orgs",
  CONNECT_DEMO = "Request Demo Connect",
  APPLY = "Apply",
  CONTACT = "Contact Us",
  DONATE = "Donate",
  DOWNLOAD = "Download",
}

export enum APP_STORES {
  APPLE = "App Store",
  GOOGLE = "Google Play",
}

export const IMPACT_METRICS = [
  { image: Family, metric: ">10,000", label: "Families served" },
  { image: Mailbox, metric: ">40,000", label: "Letters sent" },
  { image: Globe, metric: ">11,000", label: "Incarcerated people reached" },
];

export const TECH_BOARD: BoardMember[] = [
  {
    img: Angel,
    name: "Angel Steger",
    title: "Director of Product Design",
    company: "Facebook",
  },
  {
    img: Jan,
    name: "Jan Jedrzejowicz",
    title: "Product Lead",
    company: "Google ",
  },
  { img: Bart, name: "Bart Decrem", title: "Studio Lead", company: "Mozilla" },
  {
    img: Bijan,
    name: "Bijan Marashi",
    title: "Studio Lead",
    company: "Mozilla",
  },
];

export const JUSTICE_BOARD: BoardMember[] = [
  {
    img: Adryann,
    name: "Adryann Glenn",
    title: "Founder & CEO",
    company: "Align Community",
  },
  {
    img: Shane,
    name: "Shane Rogers",
    title: "Associate",
    company: "Covington & Burling",
  },
  {
    img: Alyssa,
    name: "Alyssa Tamboura",
    title: "Founder and Director",
    company: "Walls to Bridges",
  },
  {
    img: Jay,
    name: "Jay Holder",
    title: "Program Developer",
    company: "Columbia University Center for Justice",
  },
];

export const MEMBERS: TeamMember[] = [
  {
    name: "Zo Orchingwa",
    img: Zo,
    title: "Co-Founder",
  },
  {
    name: "Gabe Saruhashi",
    img: Gabe,
    title: "Co-Founder",
  },
  {
    name: "Emma Gray",
    img: Emma,
    title: "Partnerships",
  },

  {
    name: "Lara Schull",
    img: Lara,
    title: "Engineering",
  },
  {
    name: "Jenny Lee",
    img: Jenny,
    title: "Social Media",
  },
];
