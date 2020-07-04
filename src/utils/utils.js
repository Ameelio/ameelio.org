import { US_STATES } from "./us_states";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getStateGuideData(abbrev) {
  return `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GSHEETS_ID}/values:batchGet?ranges=${abbrev}&majorDimension=ROWS&key=${process.env.REACT_APP_GSHEETS_KEY}`;
}

export function getStateName(abbrev) {
  return US_STATES[abbrev];
}
