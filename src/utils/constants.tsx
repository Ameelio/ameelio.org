import Family from "src/assets/WhyAmeelio/Family.svg";
import Globe from "src/assets/WhyAmeelio/Globe.svg";
import Mailbox from "src/assets/WhyAmeelio/Mailbox.svg";

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
