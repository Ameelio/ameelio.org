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
