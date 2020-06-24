// analytics.js

export const trackPageOpen = () => {
  window.analytics.track("Landing Page Open");
};

export const trackButtonClick = (type, position) => {
  window.analytics.track(`Click on ${type} Button`, { position: position });
};

export const trackNav = (page) => {
  window.analytics.track("Click on Menu Item", { page: page });
};

export const load = () => {
  window.analytics.load(process.env.REACT_APP_SEGMENT_KEY);
};
