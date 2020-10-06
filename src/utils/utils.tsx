export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getApiUrl(): string {
  if (process.env.NODE_ENV === "production") {
    return (
      process.env.REACT_APP_API_URL_PRODUCTION || "http://127.0.0.1:8000/api/"
    );
  } else {
    return (
      process.env.REACT_APP_API_URL_STAGING || "http://127.0.0.1:8000/api/"
    );
  }
}

export function isValidUSZipCode(postal: string): boolean {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postal);
}
