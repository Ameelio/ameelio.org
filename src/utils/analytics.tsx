// analytics.js
import { PLACEMENT, BUTTON_TYPES, APP_STORES } from "src/utils/constants";
declare const window: any;

export const track = (event: string, properties?: Object) => {
  window.analytics.track(event, properties);
};

export const trackPageOpen = () => {
  window.analytics.track("Landing Page Open");
};

export const trackButtonClick = (
  type: BUTTON_TYPES,
  position: PLACEMENT,
  store?: APP_STORES
) => {
  window.analytics.track(`Click on ${type} Button`, {
    position: position,
    store: store,
  });
};

export const trackNav = (page) => {
  window.analytics.track("Click on Menu Item", { page: page });
};

export const page = () => {
  window.analytics.page();
};

export const load = () => {
  if (process.env.NODE_ENV === "production") {
    window.analytics.load(process.env.REACT_APP_SEGMENT_KEY_PROD);
  } else {
    window.analytics.load(process.env.REACT_APP_SEGMENT_KEY_STAGING);
  }
};

export const registerSegment = (userData: UserRegisterInfo) => {
  window.analytics.identify(userData.email, {
    name: `${userData.firstName} ${userData.lastName}`,
    email: userData.email,
    postal: userData.postal,
    city: userData.city,
    state: userData.state,
    referrer: userData.referrer,
  });
  window.analytics.track("Signup - Account Created", {
    city: userData.city,
    state: userData.state,
    referrer: userData.referrer,
  });
};
