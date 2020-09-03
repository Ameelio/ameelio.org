// analytics.js
import { PLACEMENT, BUTTON_TYPES, APP_STORES } from "src/utils/constants";
declare const window: any;

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
    console.log("prod");
    window.analytics.load(process.env.REACT_APP_SEGMENT_KEY_PROD);
  } else {
    console.log("stage");
    window.analytics.load(process.env.REACT_APP_SEGMENT_KEY_STAGING);
  }
};