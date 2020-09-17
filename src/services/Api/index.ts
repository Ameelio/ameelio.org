import url from "url";
import { getApiUrl } from "src/utils/utils";

export async function register(data: UserRegisterInfo): Promise<void> {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      first_name: data.firstName,
      last_name: data.lastName,
      address_line_1: data.address1,
      address_line_2: data.address2,
      referred_by: data.referredBy,
      city: data.city,
      state: data.state,
      postal: data.postal,
      country: "US",
      referer: data.referrer,
    }),
  };
  const response = await fetch(
    url.resolve(getApiUrl(), "register"),
    requestOptions
  );
  const body = await response.json();
  if (body.status !== "OK" || body.exception) throw body;
}

export async function fetchReferrerName(referrerId: string): Promise<string> {
  const response = await fetch(
    url.resolve(getApiUrl(), `referrer/${referrerId}`)
  );
  const body = await response.json();

  if (body.status !== "OK" || body.exception) throw body;

  localStorage.setItem("referrer_id", referrerId);
  const { name } = body.data;

  return name;
}
