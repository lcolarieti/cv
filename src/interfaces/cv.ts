
export interface ICv {
  readonly user: IUser;
  readonly sidebar: ISidebarItem[];
  readonly main: IMain;
  readonly skills: string[];
}

export interface IUser {
  name: string;
  role: string;
  email: string;
  birth: string;
  city: string;
  country: string;
  phone: string;
  picture: string;
  links: ILink[]
}

export interface ILink {
  label: string;
  url: string;
}

export interface ISidebarItem {
  title: string;
  content: string[];
}

export interface IMain {
  title: string;
  list: IMainItem[];
}

export interface IMainItem {
  company: string;
  logo: string;
  role: string;
  start: string;
  end: string;
  tasks: string[];
  description: string;
}