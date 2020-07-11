import { US_STATES } from "./us_states";

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface FacilityItem {
  state: string;
  facility: string;
  description: string;
  address: string;
  telephone: string;
  mailing: string;
  route: string;
}

type GuideFilter = "state" | "facility";

export async function getGuideData(keyword: string, type: GuideFilter) {
  // const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GSHEETS_ID}/values:batchGet?ranges=${abbrev}&majorDimension=ROWS&key=${process.env.REACT_APP_GSHEETS_KEY}`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_GSHEETS_ID}/values:batchGet?ranges=Main&majorDimension=ROWS&key=${process.env.REACT_APP_GSHEETS_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  let batchRowValues = data.valueRanges[0].values;

  let rows: FacilityItem[] = [];

  for (let i = 1; i < batchRowValues.length; i++) {
    let rowObject: FacilityItem = {} as FacilityItem;

    for (let j = 0; j < batchRowValues[i].length; j++) {
      rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
    }
    rows.push(rowObject);
  }
  switch (type) {
    case "state":
      rows = rows.filter((row) => row.state === getStateName(keyword));
      break;
    case "facility":
      rows = rows.filter((row) => row.route === keyword);
      break;
  }

  return rows;
}

export function getStateName(abbrev: string): string {
  const matches = US_STATES.filter((state) => {
    return state.abbreviation === abbrev;
  });
  return matches[Object.keys(matches)[0]]["name"];
}
