import Family from "src/assets/WhyAmeelio/Family.svg";
import Globe from "src/assets/WhyAmeelio/Globe.svg";
import Mailbox from "src/assets/WhyAmeelio/Mailbox.svg";

// Team
import Zo from "src/assets/Team/Zo.png";
import Gabe from "src/assets/Team/Gabe.png";
import Emma from "src/assets/Team/Emma.png";
import Lara from "src/assets/Team/Lara.png";
import Jesse from "src/assets/Team/Jesse.png";
import Jenny from "src/assets/Team/Jenny.png";
import Mark from "src/assets/Team/Mark.png";
import Liz from "src/assets/Team/Liz.png";
import Joyce from "src/assets/Team/Joyce.png";
import Kiran from "src/assets/Team/Kiran.png";
import Alisa from "src/assets/Team/Alisa.png";
import Isis from "src/assets/Team/Isis.png";
import Kevin from "src/assets/Team/Kevin.png";
import Joy from "src/assets/Team/Joy.png";
import Adam from "src/assets/Team/Adam.png";
import Andrew from "src/assets/Team/Andrew.png";

// Board
import Angel from "src/assets/Board/Angel.png";
import Bart from "src/assets/Board/Bart.png";
import Jan from "src/assets/Board/Jan.png";
import Shane from "src/assets/Board/Shane.png";
import Alyssa from "src/assets/Board/Alyssa.png";
import Jay from "src/assets/Board/Jay.png";
import Bijan from "src/assets/Board/Bijan.png";
import Adryann from "src/assets/Board/Adryann.png";
import Shon from "src/assets/Board/Shon.png";
import Raph from "src/assets/Board/Raph.png";
import RJ from "src/assets/Board/RJ.png";

// Supporters
import Mozilla from "src/assets/supporters/mozilla.png";
import Robinhood from "src/assets/supporters/robinhood.png";
import FastForward from "src/assets/supporters/ffw.png";
import SchmidtFuture from "src/assets/supporters/SchmidtFuture.png";
import Google from "src/assets/supporters/Google.png";

// Law Firms
import Wilson from "src/assets/LawFirms/Wilson.jpg";
import Cooley from "src/assets/LawFirms/Cooley.png";
import Fish from "src/assets/LawFirms/Fish.jpg";
import Wiggins from "src/assets/LawFirms/Wiggins.jpg";
import Williams from "src/assets/LawFirms/Williams.jpg";
import Proskauer from "src/assets/LawFirms/Proskauer.png";
import Morrison from "src/assets/LawFirms/Morrison.jpg";
import Covington from "src/assets/LawFirms/Covington.jpg";
import Orrick from "src/assets/LawFirms/Orrick.png";

// Orgs
import Pen from "src/assets/Orgs/Pen.png";
import BailFund from "src/assets/Orgs/CTBF.png";
import Marshall from "src/assets/Orgs/Marshall.png";
import PLAP from "src/assets/Orgs/PLAP.png";
import Defy from "src/assets/Orgs/Defy.png";

// Orgs Use Cases
import Contacts from "src/assets/OrgsHowItWorks/Contacts.png";
import MassMail from "src/assets/OrgsHowItWorks/MassMail.png";
import Persons from "src/assets/OrgsHowItWorks/Persons.png";

// Orgs Testimonials
import Robbie from "src/assets/OrgsTestimonials/Robbie.png";
import PenLogo from "src/assets/OrgsTestimonials/PenLogo.png";
import Marina from "src/assets/OrgsTestimonials/Marina.jpg";
import Dreamkit from "src/assets/OrgsTestimonials/Dreamkit.png";

export enum PLACEMENT {
  NAV = "navbar",
  HERO = "hero",
  CARD = "card",
  SECTION = "section",
  REFERRAL = "referral",
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
  { image: Mailbox, metric: ">50,000", label: "Letters sent" },
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
  {
    img: Raph,
    name: "Raphael Lee",
    title: "Project Co-Lead",
    company: "U.S. Digital Response",
  },
  {
    img: RJ,
    name: "RJ Fox",
    title: "Growth Marketing Director",
    company: "LinkedIn",
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
  {
    img: Shon,
    name: "Shon Hopwood",
    title: "Associate Professor",
    company: "Georgetown University Law Center",
  },
];

export const MEMBERS: Member[] = [
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
    name: "Jesse Horne",
    img: Jesse,
    title: "Engineering",
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
  {
    name: "Mark Pekala",
    img: Mark,
    title: "Engineering",
  },
  {
    name: "Joyce Wu",
    img: Joyce,
    title: "Engineering",
  },
  {
    name: "Elizabeth Levin",
    img: Liz,
    title: "Policy",
  },
  {
    name: "Kevin Zhang",
    img: Kevin,
    title: "Product",
  },
  {
    name: "Andrew Lama",
    img: Andrew,
    title: "Policy",
  },
  {
    name: "Kiran Chokshi",
    img: Kiran,
    title: "Finance",
  },
  {
    name: "Isis Decrem",
    img: Isis,
    title: "Storytelling",
  },
  {
    name: "Alisa Chokshi",
    img: Alisa,
    title: "Storytelling",
  },
  {
    name: "Adam Sarsony",
    img: Adam,
    title: "Engineering",
  },
  {
    name: "Joy Qiu",
    img: Joy,
    title: "Engineering",
  },
];

export const FOUNDATIONS: Supporter[] = [
  { name: "Jack Dorsey" },
  { name: "Schmidt Futures", image: SchmidtFuture },
  { name: "Robinhood Foundation", image: Robinhood },
  { name: "Mozilla Foundation", image: Mozilla },
  { name: "Fast Forward", image: FastForward },
  { name: "Google.org", image: Google },
  { name: "Paige Henchen" },
];

export const LAW_FIRMS: Supporter[] = [
  { name: "Wilson Sonsini", image: Wilson },
  { name: "Wiggin and Dana", image: Wiggins },
  { name: "Cooley", image: Cooley },
  { name: "Fish & Richardson", image: Fish },
  { name: "Orrick", image: Orrick },
  { name: "Proskauer Rose", image: Proskauer },
  { name: "Morrison & Foerster", image: Morrison },
  { name: "Covington", image: Covington },
  { name: "Williams & Connolly", image: Williams },
];

// Step-by-step
export const STEPS = [
  {
    header: "Add your contact",
    body:
      "Before sending your first letter, use our locator tool to find your loved one’s inmate ID. Select their facility, and we’ll auto-complete the mailing address. We send mail to all correctional and detention facilities in the U.S.",
  },
  {
    header: "Write a message & attach a photo",
    body:
      "Type up your note and attach photos through our web or mobile application. Right now, your letter can be about 9,000 characters. That translates to roughly three typed pages or six handwritten pages. The maximum photo attachment is 25mb. Because of prison mailing restrictions, we can only print images no larger than 4’’ x 6’’",
  },
  {
    header: "Review your letter",
    body:
      "We’ll give you a chance to read over your letter and check the formatting. Your loved one will receive a physical copy of the note you see on your screen.",
  },
  {
    header: 'Click "send"',
    body:
      "Once you click send, we route your note to an automated third-party service for printing and mailing. Ameelio Letters are sent using USPS First Class Mail, and typically take 4 to 7 business days to travel from your device to your loved one’s facility. Please note that due to COVID-19, your letter may arrive a little later than usual.",
  },
  {
    header: "Track your letter",
    body:
      "We know you’re excited for your loved one to receive your message, so we’ll keep you updated on its progress. Each letter sent through our platform has a unique barcode that is scanned by USPS as it travels through the mail stream. We’ll share mail tracking events with you on your account.",
  },
  {
    header: "Receive updates",
    body:
      "Here is a breakdown of the major events: on its way (the letter request was successfully created, and should arrive within 4-7 business days), delivered to facility (the letter was successfully delivered to the facility), returned to sender (the letter is being returned to sender because of barcode, ID tag, or address errors).",
  },

  {
    header: "Read your past messages",
    body:
      "We introduced our Memory Lane feature in response to our users’ requests for a memory bank. We save your past letters for you to re-read whenever you like.",
  },
];

export const REFERRAL_SOURCES: string[] = [
  "Recommendation from Friends or Family",
  "Incarcerated Loved-One",
  "Facebook/Instagram",
  "News/Radio/TV",
  "Internet Search",
  "Other",
];

export const STATES: string[] = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "VI",
  "WA",
  "WV",
  "WI",
  "WY",
];

export const PartnerOrgs: string[] = [Marshall, Pen, BailFund, PLAP, Defy];

export const ORGS_USE_CASES: UseCase[] = [
  {
    image: Persons,
    title: "Manage Volunteers",
    description:
      "Manage correspondence between your team and incarcerated individuals.",
  },
  {
    image: MassMail,
    title: "Mass Mail",
    description:
      " Send out PDFs, newsletters, or packets to incarcerated people in bulk.",
  },
  {
    image: Contacts,
    title: "Find Contacts",
    description:
      "Locate incarcerated people that need your services even before release.",
  },
];

export const ORGS_TESTIMONIALS: OrgTestimonial[] = [
  {
    image: Robbie,
    orgImage: PenLogo,
    org: "Pen America",
    testimonial:
      "Thanks to Ameelio, instead of shutting down our mail efforts we were able to continue and expand our mentorship program for incarcerated writers by 50% and have the capacity to expand even further.",
    name: "Robbie",
  },
  {
    image: Marina,
    orgImage: Dreamkit,
    org: "Dreamkit",
    name: "Marina",
    testimonial:
      "From couch surfing to staying at various shelters, unstably housed youth are such a hard population to provide resources to because of their high transiency circumstances. Ameelio has helped us target and connect with these youth before they disappear into the system, and for that we are forever grateful.",
  },
];
