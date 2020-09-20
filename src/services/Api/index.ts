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

interface ReferrerRaw {
  name: string;
  image: string;
  created_at: string;
  city: string;
  state: string;
  total_letters_sent: number;
}

function cleanReferrer(raw: ReferrerRaw): Referrer {
  return {
    name: raw.name,
    image: raw.image,
    createdAt: new Date(raw.created_at),
    city: raw.city,
    state: raw.state,
    totalLettersSent: raw.total_letters_sent,
  };
}

export async function fetchReferrer(referrerId: string): Promise<Referrer> {
  const response = await fetch(
    url.resolve(getApiUrl(), `referrer/${referrerId}`)
  );
  const body = await response.json();

  if (body.status !== "OK" || body.exception) throw body;

  localStorage.setItem("referrer_id", referrerId);
  const referrer = cleanReferrer(body.data);

  return referrer;
}
