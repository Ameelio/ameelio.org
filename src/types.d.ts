interface Member {
  name: string;
  img: string;
  title: string;
}

interface TeamMember extends Member {}

interface BoardMember extends Member {
  company: string;
}

interface Supporter {
  name: string;
  image?: string;
}

// state types
interface UserRegisterInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  address1: string;
  address2?: string;
  postal: string;
  city: string;
  state: string;
  referredBy: string | null;
  referrer: string;
}
