export interface iCardProps {
  login: string;
  avatar_url: string;
  name: string;
  bio?: string;
  company?: string;
  location?: string;
  followers?: number;
  following?: number;
  created_at: string;
  public_repos: number;
  html_url: string;
  twitter_username?: string;
}

export interface iUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable?: any;
  bio?: any;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface context {
  theme: string;
  loader: boolean;
  isError: boolean;
  userData: iUser | undefined;
  getUser: (username: string | undefined) => Promise<void>;
  handleThemeSwitch: () => any;
}

export interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}
