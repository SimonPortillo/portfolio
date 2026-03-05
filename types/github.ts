export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  company: string | null;
  hireable: boolean | null;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  repos?: GitHubRepo[];
}
